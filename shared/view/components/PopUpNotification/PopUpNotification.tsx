import { memo } from 'react';

import { TextButton } from 'shared/view/elements';

import * as S from './PopUpNotification.styles';

type Props = {
  message: string;
  onConfirmButtonClick: () => void;
};

const PopUpNotification = memo(({ message, onConfirmButtonClick }: Props) => (
  <S.PopUpNotification>
    <S.Message>{message}</S.Message>
    <TextButton type="button" onClick={onConfirmButtonClick}>
      ОК
    </TextButton>
  </S.PopUpNotification>
));

export { PopUpNotification };
