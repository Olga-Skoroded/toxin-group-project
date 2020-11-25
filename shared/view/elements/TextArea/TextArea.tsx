import { FormEvent, TextareaHTMLAttributes, memo } from 'react';
import { Field } from 'react-final-form';

import * as S from './TextArea.styles';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const defaultPlaceholder = 'Оставьте отзыв о нашем номере...';

const handleTextChange = (e: FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = 'auto';
  target.style.height = `${target.scrollHeight}px`;
};

const Textarea: React.FC<Props> = memo(
  ({ name, placeholder = defaultPlaceholder, ...rest }: Props) => {
    return (
      <Field
        name={name}
        render={({ input }) => (
          <S.Textarea {...rest} {...input} onInput={handleTextChange} placeholder={placeholder} />
        )}
      />
    );
  },
);

export { Textarea };
