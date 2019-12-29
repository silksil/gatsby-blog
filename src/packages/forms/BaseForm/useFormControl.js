import { useContext, useEffect, useRef, useState, useCallback } from "react";
import translateError from "./translateError";
import validator from "./validator";

import FormContext from "./context";

const useFormControl = ({
  name,
  defaultValue = null,
  id,
  validateOnChange,
  validateOnBlur,
  validation = "",
  validationMessages: customValidationMessages = {}
}) => {
  if (!name) {
    throw new Error("The name parameter is required");
  }

  const { formId, setField } = useContext(FormContext);

  const inputRef = useRef(null);
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  // Checks whether the user has used an input field (e.g. through typing)
  // The the form inputs only validateds after it has became 'dirty'
  const [isDirty, setIsDirty] = useState(false);
  const focus = () => {
    inputRef.current.focus();
  };

  const validate = useCallback(async () => {
    if (error) return Promise.resolve(false);
    setStatus("validating");

    const err = await validator.validate(validation, value);

    if (err) {
      setError(err);
      setStatus("error");
      // return Promise.reject(Error('unexpected'));

      // We also resolve invalid stuff, because we 'expect' a boolean as result.
      // Only when an unexpected result happens, we should reject
      return Promise.resolve(false);
    }
    setError(null);
    setStatus("success");

    return Promise.resolve(true);
  }, [error, validation, value]);

  useEffect(() => {
    setField(name, {
      focus, // Puts focus on the input
      validate, // Validates the current value
      removeError: () => {}, // Removes the error
      reset: () => {
        setError(null);
        setValue(null);
        setStatus("idle");
      }, // Removes the value and error
      setError,
      getValue: () => value
    });
  }, [name, setField, validate, value]);

  /**
   * Passes the value of an input change to the form's context for validation
   * and usage on form submit.
   */
  const setInputValue = val => {
    if (error) {
      setError(null);
    }
    if (status !== "idle") {
      setStatus("idle");
    }
    setIsDirty(true);
    setValue(val);
  };

  const handleBlur = async () => {
    if (validateOnBlur && isDirty) {
      await validate();
    }
  };

  useEffect(() => {
    if ((error || validateOnChange) && isDirty) {
      validate();
    }
  }, [error, isDirty, validate, validateOnChange, value]);

  const translatedError =
    error && translateError(error, customValidationMessages);

  // Check if 'required' exists are part of the validations
  const validationRules = validation || "";
  const rules = validationRules && validationRules.split("|");
  const isRequired = rules.includes("required") || rules.includes("accepted");

  return {
    isRequired,
    error: translatedError,
    status,
    value,
    fieldId: id || `${formId}-${name}`,
    setValue: setInputValue,
    inputRef,
    handleBlur
  };
};

export default useFormControl;
