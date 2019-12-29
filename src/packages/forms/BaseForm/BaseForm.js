import React, { useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
import ErrorIcon from "../../icons/UI/ErrorIcon";
import ErrorMessage from "./ErrorMessage";

import Context from "./context";
import translateError from "./translateError";

const STATUSSES = {
  idle: { name: "idle", error: null },
  loading: { name: "loading", error: null },
  success: { name: "success", error: null },
  error: { name: "error" }
};

const BaseForm = ({
  children,
  onSubmit,
  id: formId,
  resetAfterSuccess,
  successDurationMs,
  onAfterSuccess,
  validationMessages: customValidationMessages = {}
}) => {
  const [status, setStatus] = useState(STATUSSES.idle);

  const { current: fields } = useRef({});

  const setField = (name, props) => {
    fields[name] = props;
  };

  const reset = () => {
    setStatus(STATUSSES.idle);
  };

  /**
   * validates all the fields given in the list by triggering the 'validate'
   * method on each field. Each field's validate method might have a promised based
   * validation which allows async requests. For example, if you need to check if a
   * username already exists, you can do that in the validation method by returning a
   * Promise based result like below:
   * ```
   * const validate = async () => {
   *   const { data } await axios('https://endpoint', { params: {username: 'foo'}});
   *   return data.exists ? 'exists' : null;
   * }
   * ```
   *
   * This method is wrapped in a useCallback to keep it from triggering any
   * re-renders when this component re-renders. The second param has an empty array
   * since this function accepts its own parameters and does not require re-initialization
   * @param {Array.Object} fieldList - A collection of fields
   * @returns {Promise<Array.Object>}
   */
  const validateFields = useCallback(fieldList => {
    // Wraps a validate method in a promise
    const wrapper = ({ validate, ...field }) =>
      new Promise(async resolve => {
        resolve({
          ...field,
          isValid: await Promise.resolve(validate())
        });
      });

    const promises = fieldList.map(wrapper);

    return Promise.all(promises); // Execute all validation methods in (almost) parallel
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      // Easier to work with a list to iterate all the fields
      const fieldList = Object.keys(fields).map(name => ({
        name,
        ...fields[name]
      }));

      setStatus(STATUSSES.loading);

      // Create object with validation result per field
      const validationResult = await validateFields(fieldList).catch(err => {
        console.log(err); // eslint-disable-line
        return null;
      });

      if (validationResult === null) {
        return Promise.resolve();
      }

      const invalidFields = validationResult.filter(({ isValid }) => !isValid);

      const fieldsAreValid = invalidFields.length === 0;

      if (!fieldsAreValid) {
        invalidFields[0].focus(); // Put focus on first field with an error
        setStatus(STATUSSES.error);
      }

      const setSuccess = () => {
        setStatus(STATUSSES.success);

        // What happens after the success is successful
        const handleAfterSuccess = () => {
          if (resetAfterSuccess) {
            reset();
          }
          // Allow for a custom hook that gets triggered after success
          if (onAfterSuccess) {
            onAfterSuccess();
          }
        };

        // Allows the success state to exist for n milliseconds to show
        // for example a checkmark in the submit button
        if (successDurationMs) {
          setTimeout(handleAfterSuccess, successDurationMs);
        } else {
          handleAfterSuccess();
        }
      };

      // Error state was already set above if fields are invalid. Simply stop this handler
      if (!fieldsAreValid) {
        return Promise.resolve();
      }

      if (!onSubmit) {
        return Promise.resolve(setSuccess());
      }

      // Prepare an object of values by calling the 'getValue' method on each field
      const values = fieldList.reduce(
        (obj, { name, getValue }) => ({
          ...obj,
          [name]: getValue()
        }),
        {}
      );

      // Call the specified onSubmit function with the values object
      const result = await Promise.resolve(onSubmit(values));

      // The result is expected to contain an error field if something went wrong
      // This result + error field should have the following format:
      // const result = { error: { message: '<error-string>', fields: {<fieldname>: [<error-string>]}} }
      if (!result || !result.error) {
        return Promise.resolve(setSuccess());
      }

      if (result.error) {
        // Iterate trough the fields object in result.error and call the "setError" field
        // in the useFormControl hook. Putting the error state in the useFormControl hook instead
        // of the BaseForm prevents re-renders whenever a field gets an error
        Object.keys(result.error.fields).forEach(fieldName => {
          fields[fieldName].setError(result.error.fields[fieldName][0]);
        });

        setStatus({ ...STATUSSES.error, error: result.error.message });
        return Promise.resolve();
      }
      setStatus(STATUSSES.error);

      return Promise.resolve();
    },
    [
      fields,
      onAfterSuccess,
      onSubmit,
      resetAfterSuccess,
      successDurationMs,
      validateFields
    ]
  );

  const value = {
    error: status.error, // The form error object
    status: status.name, // The status of whole form. Either: idle, loading, success or error.
    formId, // The ID of the form tag. (used to generated field id's based on name. See useFormControl hook)
    setField
  };

  const translatedError =
    status.error && translateError(status.error, customValidationMessages);
  const showErrorMessage = status.name !== "loading" && status.error;

  return (
    <Context.Provider value={value}>
      <form onSubmit={handleSubmit} id={formId} method="post">
        {children}
        {showErrorMessage && (
          <ErrorMessage>
            <ErrorIcon size="sm" color="black" />
            {translatedError}
          </ErrorMessage>
        )}
      </form>
    </Context.Provider>
  );
};

BaseForm.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  id: PropTypes.string.isRequired,
  successDurationMs: PropTypes.number, // Makes the form stay in the success state for n milliseconds
  resetAfterSuccess: PropTypes.bool, // Resets the form if successful and set to true
  onAfterSuccess: PropTypes.func, // A hook that will be called 'after' success
  validationMessages: PropTypes.shape({})
};

BaseForm.defaultProps = {
  children: null,
  onSubmit: null,
  successDurationMs: 1050, // Tweaked ms to match the animation of the checkmark in the submit button
  resetAfterSuccess: true,
  onAfterSuccess: null,
  validationMessages: {}
};

export default React.memo(BaseForm);
