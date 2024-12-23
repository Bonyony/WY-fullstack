export const validateInputs = (field, value, errors) => {
  const newErrors = { ...errors };

  if (field === "username") {
    if (value.length < 2 || value.length > 20) {
      newErrors.username = "Username must be between 2 and 20 characters.";
    } else {
      delete newErrors.username;
    }
  }

  if (field === "password") {
    if (value.length < 8 || value.length > 30) {
      newErrors.password = "Password must be between 8 and 20 characters.";
    } else {
      delete newErrors.password;
    }
  }

  return newErrors;
};
