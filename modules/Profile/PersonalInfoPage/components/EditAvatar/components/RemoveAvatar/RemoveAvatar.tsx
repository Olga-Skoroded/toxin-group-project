import { useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { avatarRemove, completeAvatarRemove } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { PopUpNotification } from 'shared/view/components';

type StateProps = {
  isCompleted: boolean;
  isSuccess: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isCompleted: state.profile.isAvatarRemoveCompleted,
  statusText: state.profile.avatarRemoveStatusText,
  isSuccess: state.profile.isAvatarRemoveSuccess,
});

const mapDispatch = {
  startAvatarRemove: avatarRemove,
  stopAvatarRemove: completeAvatarRemove,
};

type OwnProps = {
  user: User;
  onConfirm: () => void;
  onCancel: () => void;
  onSuccess: () => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const RemoveAvatar = memo(
  ({
    user,
    onCancel,
    onConfirm,
    isCompleted,
    statusText,
    isSuccess,
    onSuccess,
    startAvatarRemove,
    stopAvatarRemove,
  }: Props) => {
    const { t } = useTranslation('PersonalInfo');

    const handleConfirmationCancel = () => {
      onCancel();
    };

    const handleNotificationCancel = () => {
      stopAvatarRemove();
      onConfirm();
      isSuccess && onSuccess();
    };

    const handleConfirmationSuccess = () => {
      startAvatarRemove({ user });
    };

    useEffect(() => {
      stopAvatarRemove();
    }, [stopAvatarRemove]);

    return (
      <>
        {isCompleted ? (
          <PopUpNotification
            message={t(statusText)}
            onConfirmButtonClick={handleNotificationCancel}
          />
        ) : (
          <PopUpNotification
            message={t('Are you sure you want to delete avatar?')}
            withCancelButton
            onConfirmButtonClick={handleConfirmationSuccess}
            onCancelButtonClick={handleConfirmationCancel}
          />
        )}
      </>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(RemoveAvatar);
export { ConnectedComponent as RemoveAvatar };
