type Error = {
  code: string;
  message: string;
};

const getPasswordUpdateErrorMessage = ({ code, message }: Error): string => {
  switch (code) {
    case 'auth/wrong-password':
      return 'Неверный пароль';
    case 'auth/user-mismatch':
      return 'Полученные учетные данные не соответствуют текущему пользователю';
    case 'passwords-do-not-match':
      return 'Пароли не совпадают';
    default:
      if (message === 'Пароли не совпадают') return message;
      return 'Произошла ошибка';
  }
};

export { getPasswordUpdateErrorMessage };
