import { memo } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { AppState } from 'redux/store.model';
import { subscriptionUpdate, completeSubscriptionUpdate } from 'redux/Subscriptions/redux/actions';
import { PopUpNotification } from 'shared/view/components';
import { Button, Toggle } from 'shared/view/elements';

import * as S from './Subscriptions.styles';

type StateProps = {
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.subscriptions.isUpdatePending,
  isCompleted: state.subscriptions.isUpdateCompleted,
  statusText: state.subscriptions.updateStatusText,
});

const mapDispatch = {
  startSubscriptionUpdate: subscriptionUpdate,
  stopSubscriptionUpdate: completeSubscriptionUpdate,
};

type OwnProps = {
  email: string;
  hasSpecialOffers: boolean;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  hasSpecialOffers: boolean;
};

const Subscriptions = memo(
  ({
    email,
    hasSpecialOffers,
    isPending,
    isCompleted,
    statusText,
    startSubscriptionUpdate,
    stopSubscriptionUpdate,
  }: Props) => {
    const onSubmit = ({ hasSpecialOffers: newValue }: FormData) => {
      startSubscriptionUpdate({ email, subscriptions: { hasSpecialOffers: newValue } });
    };

    const { t } = useTranslation('NotificationsPage');

    return (
      <S.Subscriptions>
        <S.Title>{t('Newsletters')}</S.Title>
        <Form
          initialValues={{ hasSpecialOffers }}
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <>
              <form onSubmit={handleSubmit}>
                <S.List>
                  <S.Item>
                    <Toggle name="hasSpecialOffers" label={t('Receive special offers')} />
                  </S.Item>
                </S.List>
                <Button disabled={isPending} isFlat isFilled>
                  {t('Save')}
                </Button>
              </form>
              {isCompleted && (
                <PopUpNotification
                  message={t(statusText)}
                  onConfirmButtonClick={stopSubscriptionUpdate}
                />
              )}
            </>
          )}
        />
      </S.Subscriptions>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(Subscriptions);
export { ConnectedComponent as Subscriptions };
