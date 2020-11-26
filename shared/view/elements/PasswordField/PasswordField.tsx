import { memo, useState } from 'react';

import { InputProps } from '../Input/Input';
import * as S from './PasswordField.styles';

const PasswordField = memo((props: InputProps) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handleButtonClick = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  return (
    <S.Container>
      <S.Input {...props} type={isPasswordVisible ? 'text' : 'password'} />
      <S.VisibilityButton type="button" isVisible={isPasswordVisible} onClick={handleButtonClick} />
    </S.Container>
  );
});

export { PasswordField };
