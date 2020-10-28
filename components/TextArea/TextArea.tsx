import { FormEvent, TextareaHTMLAttributes } from 'react';
import { Field } from 'react-final-form';

import * as S from './TextArea.styles';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const defaultPlaceholder = 'Оставьте отзыв о нашем отеле...';

const handleTextChange = (e: FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = 'auto';
  target.style.height = `${target.scrollHeight}px`;
};

const Textarea: React.FC<Props> = ({ name, placeholder = defaultPlaceholder, ...rest }: Props) => {
  return (
    <Field
      name={name}
      render={({ input }) => (
        <S.Textarea {...rest} {...input} onInput={handleTextChange} placeholder={placeholder} />
      )}
    />
  );
};

export default Textarea;
