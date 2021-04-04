export const formDataParser = formData => {
  return {
    username: formData.username,
    password: formData.password,
  };
};
