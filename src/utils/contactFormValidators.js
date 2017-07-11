const fieldIsRequired = (errorMessage) => (value) => {
  const isValid = !!(value && value.length);
  return isValid ? undefined : errorMessage;
};

export default {
  firstNameValidators: {
    fieldIsRequired: fieldIsRequired('Enter a first name'),
  },
  lastNameValidators: {
    fieldIsRequired: fieldIsRequired('Enter a last name'),
  },
  emailValidators: {
    fieldIsRequired: fieldIsRequired('Enter an email'),
    isEmailValidation(value) {
      const emailRegexp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/gm;
      const isValid = emailRegexp.test(value);
      return isValid ? undefined : 'Email is invalid';
    }
  },
}