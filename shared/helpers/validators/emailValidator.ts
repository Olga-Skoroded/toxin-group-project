const emailValidator = (email: string): string | null => {
  const isValid = email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  if (!isValid) {
    return 'Некорректный email';
  }
  return null;
};

export { emailValidator };
