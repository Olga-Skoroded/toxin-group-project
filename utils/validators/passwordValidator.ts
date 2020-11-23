const passwordValidator = (password: string): string | null => {
  const errorMessage =
    password && password.length < 8 ? 'Password must contain at least 8 characters' : null;
  return errorMessage;
};

export { passwordValidator };
