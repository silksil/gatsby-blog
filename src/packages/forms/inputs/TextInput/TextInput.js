import React, { useState } from "react";
import { string, bool } from "prop-types";
import ErrorIcon from "../../../icons/UI/ErrorIcon";

import { useFormControl } from "../../BaseForm";
import * as S from "./styled";
import InputMessage from "../../InputMessage";
import FormGroup from "../../FormGroup";
import FieldLabel from "../../FieldLabel";

const TextInput = ({
  name,
  label,
  helperText,
  value: defaultValue,
  disabled = false,
  ...props
}) => {
  const context = useFormControl({
    name,
    defaultValue,
    ...props
  });

  const {
    handleBlur,
    setValue,
    fieldId,
    isRequired,
    error,
    value,
    inputRef
  } = context;
  const [isFocused, setFocus] = useState(false);

  const inputMessageProps = error
    ? { text: error, variant: "error" }
    : { text: helperText, variant: "info" };

  const showInputMessage = error || (isFocused && helperText);

  return (
    <FormGroup>
      {label && (
        <FieldLabel htmlFor={fieldId}>
          {label}
          {!isRequired && <small> (optioneel)</small>}
        </FieldLabel>
      )}

      <S.InputGroup className="form-control">
        <S.InputField
          ref={inputRef}
          id={fieldId}
          onChange={event => setValue(event.currentTarget.value)}
          name={name}
          hasError={!!error}
          disabled={disabled}
          value={value || ""}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            handleBlur();
            setFocus(false);
          }}
          noValidate
          {...props}
        />
        {error && (
          <S.InputGroupAddon>
            <ErrorIcon />
          </S.InputGroupAddon>
        )}
      </S.InputGroup>

      <InputMessage open={showInputMessage} variant={inputMessageProps.variant}>
        {inputMessageProps.text}
      </InputMessage>
    </FormGroup>
  );
};

TextInput.propTypes = {
  name: string.isRequired,
  label: string,
  value: string,
  disabled: bool,
  helperText: string,
  validateOnBlur: bool,
  validateOnChange: bool
};

TextInput.defaultProps = {
  label: null,
  value: undefined,
  disabled: false,
  helperText: null,
  validateOnBlur: true,
  validateOnChange: false
};

export default TextInput;
