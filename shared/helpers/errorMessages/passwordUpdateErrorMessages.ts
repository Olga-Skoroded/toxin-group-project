type Error = {
  code: string;
  message: string;
};

const getPasswordUpdateErrorMessage = ({ code, message }: Error): string => {
  switch (code) {
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'auth/user-mismatch':
      return 'Received credentials do not match the current user';
    default:
      if (message === 'Passwords do not match') return message;
      return 'An error has occurred';
  }
};

export { getPasswordUpdateErrorMessage };
