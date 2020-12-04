import { memo, useState } from 'react';

import * as S from './TypeMessageArea.styles';

type Props = {
  submitMessage: (message: string) => void;
};

const TypeMessageArea = memo(
  ({ submitMessage }: Props): JSX.Element => {
    const [text, setText] = useState('');

    const onSubmitButtonClick = () => text.trim() ?? submitMessage(text);

    const onMessageAreaKeyPress = (event: React.KeyboardEvent): void => {
      if (event.key === 'Enter' && text.trim()) {
        submitMessage(text);
        setText('');
      }
    };

    const changeText = (event: React.ChangeEvent): void => {
      const HTMLElement = event.target as HTMLTextAreaElement;
      setText(HTMLElement.value);
    };

    return (
      <S.Container>
        <S.MessageArea
          placeholder="Введите сообщение"
          onChange={changeText}
          value={text}
          onKeyDown={onMessageAreaKeyPress}
        />
        <S.SubmitButton onClick={onSubmitButtonClick} />
      </S.Container>
    );
  },
);

export { TypeMessageArea };
