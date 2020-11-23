import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { User } from 'services/api/Firebase/modules/Authentication';
import { TextButton } from 'shared/view/elements';

import { EditBirthday } from './components/EditBirthday/EditBirthday';
import { EditDisplayName } from './components/EditDisplayName/EditDisplayName';
import { EditEmail } from './components/EditEmail/EditEmail';
import { EditGender } from './components/EditGender/EditGender';
import * as S from './EditPersonalInfo.styles';

type Props = {
  user: User;
  title: string;
  component: string;
  currentEditing: string;
  onEditButtonClick: (title: string) => void;
  value?: string;
  description?: string;
};

const EditPersonalInfo = memo(
  ({ user, title, component, currentEditing, onEditButtonClick, value, description }: Props) => {
    const mapEditingComponents = {
      displayName: <EditDisplayName user={user} displayName={value} onChange={onEditButtonClick} />,
      gender: <EditGender user={user} gender={value} onChange={onEditButtonClick} />,
      birthday: <EditBirthday user={user} birthday={value} onChange={onEditButtonClick} />,
      email: <EditEmail user={user} email={value} onChange={onEditButtonClick} />,
    };

    const { t } = useTranslation('PersonalInfoPage');

    const isEdit = currentEditing === title;
    const isButtonDisabled = currentEditing ? !isEdit : false;

    return (
      <>
        <S.Header>
          <S.Title>{t(title)}</S.Title>
          <TextButton
            type="button"
            disabled={isButtonDisabled}
            onClick={() => onEditButtonClick(title)}
          >
            {isEdit ? t('Cancel') : t('Edit')}
          </TextButton>
        </S.Header>
        <S.Content>
          <S.Description>{isEdit ? t(description) : t(value)}</S.Description>
          {isEdit && mapEditingComponents[component]}
        </S.Content>
      </>
    );
  },
);

export { EditPersonalInfo };
