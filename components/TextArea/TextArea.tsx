import { FormEvent } from 'react';
import { Field } from 'react-final-form';

import * as S from './TextArea.styles';

type Props = {
  name: string;
  placeholder?: string;
};

const defaultPlaceholder = 'Оставьте отзыв о нашем отеле...';

const handleTextChange = (e: FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = 'auto';
  target.style.height = `${target.scrollHeight}px`;
};

const Textarea: React.FC<Props> = ({ name, placeholder = defaultPlaceholder }: Props) => {
  return (
    <Field
      name={name}
      render={({ input }) => (
        <S.Textarea {...input} onInput={handleTextChange} placeholder={placeholder} />
      )}
    />
  );
};

export default Textarea;
