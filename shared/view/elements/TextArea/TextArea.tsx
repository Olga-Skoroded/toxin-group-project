import { FormEvent, TextareaHTMLAttributes, memo } from 'react';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import * as S from './TextArea.styles';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const defaultPlaceholder = 'Leave your review about this room';

const handleTextChange = (e: FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = 'auto';
  target.style.height = `${target.scrollHeight}px`;
};

const Textarea: React.FC<Props> = memo(
  ({ name, placeholder = defaultPlaceholder, ...rest }: Props) => {
    const { t } = useTranslation('RoomDetailsPage');
    return (
      <Field
        name={name}
        render={({ input }) => (
          <S.Textarea
            {...rest}
            {...input}
            onInput={handleTextChange}
            placeholder={`${t(placeholder)}...`}
          />
        )}
      />
    );
  },
);

export { Textarea };
