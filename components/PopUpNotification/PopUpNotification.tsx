import TextButton from 'components/TextButton/TextButton';

import * as S from './PopUpNotification.styles';

type Props = {
  message: string;
  onConfirmButtonClick: () => void;
};

const PopUpNotification = ({ message, onConfirmButtonClick }: Props): JSX.Element => (
  <S.PopUpNotification>
    <S.Message>{message}</S.Message>
    <TextButton type="button" onClick={onConfirmButtonClick}>
      ОК
    </TextButton>
  </S.PopUpNotification>
);

export default PopUpNotification;
