type Error = {
  code: string;
};

const getEmailUpdateErrorMessage = ({ code }: Error): string => {
  switch (code) {
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/email-already-in-use':
      return 'The specified email address is already in use';
    case 'auth/requires-recent-login':
      return 'Re-authenticate to change your email address';
    default:
      return 'An error occured, please try again later';
  }
};

export { getEmailUpdateErrorMessage };
