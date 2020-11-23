import { memo } from 'react';
import { Field } from 'react-final-form';
import { withTranslation } from 'react-i18next';

import { Checkbox } from 'shared/view/elements';

import { Props } from './CheckboxesList.model';
import * as S from './CheckboxesList.styles';

const CheckboxesList = memo(({ roomOptions }: Props) => (
  <S.List>
    {roomOptions.map((option) => {
      const { title, label, name, isChecked } = option;
      return (
        <S.ListItem key={name} title={title}>
          <Field
            type="checkbox"
            name={name}
            render={({ input }) => (
              <Checkbox title={title} label={label} {...input} isChecked={isChecked} />
            )}
          />
        </S.ListItem>
      );
    })}
  </S.List>
));

const TranslatedComponent = withTranslation()(CheckboxesList);
export { TranslatedComponent as CheckboxesList };
