import validationMessages from './validationMessages';

const translateError = (error, customValidationMessages = {}) => {
  if (customValidationMessages[error]) {
    return customValidationMessages[error];
  }
  return validationMessages[error] || validationMessages.unknown;
};

export default translateError;
