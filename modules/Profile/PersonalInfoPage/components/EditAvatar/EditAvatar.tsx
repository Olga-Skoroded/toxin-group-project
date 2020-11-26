import { makeStyles } from '@material-ui/core/styles';
import { useState, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { User } from 'services/api/Firebase/modules/Authentication/model';
import { Avatar, TextButton } from 'shared/view/elements';

import { RemoveAvatar } from './components/RemoveAvatar/RemoveAvatar';
import { UpdateAvatar } from './components/UpdateAvatar/UpdateAvatar';
import * as S from './EditAvatar.styles';

type Props = {
  user: User;
  photoURL: string;
  onChange: () => void;
};

const EditAvatar = memo(({ user, photoURL, onChange }: Props) => {
  const [isEditorVisible, setEditorVisible] = useState(false);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [image, setImage] = useState(null);
  const { t } = useTranslation('PersonalInfo');

  const useStyles = makeStyles(() => ({
    avatarLoader: { width: '7.14285rem', height: '7.14285rem' },
  }));
  const classes = useStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditorVisible(true);
    setImage(e.target.files[0]);
    e.target.value = '';
  };

  const handleEditorCancel = () => {
    setEditorVisible(false);
  };

  const handleRemoveButtonClick = () => {
    setConfirmationVisible(true);
  };

  const handleConfirmationCancel = () => {
    setConfirmationVisible(false);
  };

  const handleConfirmationConfirm = () => {
    setConfirmationVisible(false);
  };

  const handleChangesSuccess = () => {
    onChange();
  };

  return (
    <S.EditAvatar>
      <S.AvatarWrapper>
        <Avatar photoURL={photoURL} className={classes.avatarLoader} />
        {isEditorVisible && (
          <UpdateAvatar
            user={user}
            onCancel={handleEditorCancel}
            onSuccess={handleChangesSuccess}
            image={image}
          />
        )}
      </S.AvatarWrapper>
      <S.Buttons>
        <S.EditButtonWrapper>
          <S.EditButton>{t('Update avatar')}</S.EditButton>
          <S.HiddenInput type="file" accept="image/*" onChange={handleInputChange} />
        </S.EditButtonWrapper>
        {photoURL && (
          <TextButton isSecondary onClick={handleRemoveButtonClick}>
            {t('Delete avatar')}
          </TextButton>
        )}
      </S.Buttons>
      {isConfirmationVisible && (
        <RemoveAvatar
          user={user}
          onConfirm={handleConfirmationConfirm}
          onCancel={handleConfirmationCancel}
          onSuccess={handleChangesSuccess}
        />
      )}
    </S.EditAvatar>
  );
});

export { EditAvatar };
