import { useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { avatarUpdate, completeAvatarUpdate } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { AvatarEditor, PopUpNotification } from 'shared/view/components';

import * as S from './UpdateAvatar.styles';

type StateProps = {
  isSuccess: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isSuccess: state.profile.isAvatarUpdateSuccess,
  isCompleted: state.profile.isAvatarUpdateCompleted,
  statusText: state.profile.avatarUpdateStatusText,
});

const mapDispatch = {
  startAvatarUpdate: avatarUpdate,
  stopAvatarUpdate: completeAvatarUpdate,
};

type OwnProps = {
  user: User;
  image: string;
  onCancel: () => void;
  onSuccess: () => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const UpdateAvatar = memo(
  ({
    user,
    image,
    onCancel,
    onSuccess,
    isCompleted,
    isSuccess,
    statusText,
    startAvatarUpdate,
    stopAvatarUpdate,
  }: Props) => {
    const { t } = useTranslation('PersonalInfoPage');

    const handleNotificationCancel = () => {
      stopAvatarUpdate();
      onCancel();
      isSuccess && onSuccess();
    };

    const handleEditorCancel = () => {
      onCancel();
    };

    const handleEditorSave = (canvasScaled: HTMLCanvasElement) => {
      canvasScaled.toBlob((blob: Blob) => {
        startAvatarUpdate({ user, avatar: blob });
      });
    };

    useEffect(() => {
      stopAvatarUpdate();
    }, [stopAvatarUpdate]);

    return (
      <>
        {isCompleted ? (
          <PopUpNotification
            message={t(statusText)}
            onConfirmButtonClick={handleNotificationCancel}
          />
        ) : (
          <S.EditorWrapper>
            <AvatarEditor onCancel={handleEditorCancel} image={image} onSave={handleEditorSave} />
          </S.EditorWrapper>
        )}
      </>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(UpdateAvatar);
export { ConnectedComponent as UpdateAvatar };
