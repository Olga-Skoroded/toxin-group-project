import { memo } from 'react';

import TextButton from 'components/TextButton/TextButton';
import { User } from 'services/api/Firebase/modules/Authentication/types';

import EditBirthday from './components/EditBirthday/EditBirthday';
import EditDisplayName from './components/EditDisplayName/EditDisplayName';
import EditEmail from './components/EditEmail/EditEmail';
import EditGender from './components/EditGender/EditGender';
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
      displayName: <EditDisplayName user={user} displayName={value} />,
      gender: <EditGender user={user} gender={value} />,
      birthday: <EditBirthday user={user} birthday={value} />,
      email: <EditEmail user={user} email={value} />,
    };

    const isEdit = currentEditing === title;
    const isButtonDisabled = currentEditing ? !isEdit : false;

    return (
      <>
        <S.Header>
          <S.Title>{title}</S.Title>
          <TextButton
            type="button"
            disabled={isButtonDisabled}
            onClick={() => onEditButtonClick(title)}
          >
            {isEdit ? 'Отменить' : 'Редактировать'}
          </TextButton>
        </S.Header>
        <S.Content>
          <S.Description>{isEdit ? description : value}</S.Description>
          {isEdit && mapEditingComponents[component]}
        </S.Content>
      </>
    );
  },
);

EditPersonalInfo.displayName = 'EditPersonalInfo';

export default EditPersonalInfo;
