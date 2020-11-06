type Error = {
  code: string;
};

const getEmailUpdateErrorMessage = ({ code }: Error): string => {
  switch (code) {
    case 'auth/invalid-email':
      return 'Указан недействительный адрес электронной почты';
    case 'auth/email-already-in-use':
      return 'Указанный адрес электронной почты уже используется';
    case 'auth/requires-recent-login':
      return 'Для изменения адреса электронной почты пройдите повторную аутентификацию';
    default:
      return 'Произошла ошибка повторите попытку позже';
  }
};

export { getEmailUpdateErrorMessage };
