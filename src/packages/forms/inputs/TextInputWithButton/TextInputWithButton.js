import PropTypes from "prop-types";
import React, { useState } from "react";

import { useFormControl } from "../../BaseForm";
import FieldLabel from "../../FieldLabel";
import FormGroup from "../../FormGroup";
import InputMessage from "../../InputMessage";
import * as S from "./styled";

const TextInputWithButton = ({
  name,
  label,
  value: defaultValue,
  disabled = false,
  includeStrengthFeedback,
  helperText,
  buttonText,
  isRequired,
  ...props
}) => {
  const context = useFormControl({
    name,
    defaultValue,
    isRequired,
    ...props
  });

  const { setValue, fieldId, error, value, inputRef, handleBlur } = context;

  const [isFocused, setFocus] = useState(false);

  const inputMessageProps = error
    ? { text: error, variant: "error" }
    : { text: helperText, variant: "info" };

  const showInputMessage = !!(error || (isFocused && helperText));

  return (
    <FormGroup>
      {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
      <S.InputGroup
        hasError={!!error}
        className="form-control"
        isFocused={isFocused}
      >
        <S.InputField
          ref={inputRef}
          id={fieldId}
          onChange={event => setValue(event.currentTarget.value)}
          name={name}
          disabled={disabled}
          value={value || ""}
          noValidate
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus(false);
            handleBlur();
          }}
          {...props}
          type={"text"}
        />
        <S.InputGroupAddon>
          <S.Button title={buttonText} />
        </S.InputGroupAddon>
      </S.InputGroup>

      <InputMessage open={showInputMessage} variant={inputMessageProps.variant}>
        {inputMessageProps.text}
      </InputMessage>
    </FormGroup>
  );
};

TextInputWithButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  includeStrengthFeedback: PropTypes.bool,
  validateOnBlur: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  helperText: PropTypes.string
};

TextInputWithButton.defaultProps = {
  value: undefined,
  disabled: false,
  includeStrengthFeedback: false,
  validateOnBlur: true,
  validateOnChange: false,
  helperText: null
};

export default TextInputWithButton;
