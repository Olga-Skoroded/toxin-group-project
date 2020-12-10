import { memo } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { AppState } from 'redux/store.model';
import { ContactUsData } from 'services/api/entities/model';
import { User } from 'services/api/Firebase/modules/Authentication';
import { PopUpNotification } from 'shared/view/components';
import { ArrowButton } from 'shared/view/elements';
import { emailValidator } from 'utils/validators';

import { contactUs, completeContactUs } from '../redux/redux/actions';
import * as S from './ContactUsForm.styles';

type StateProps = {
  user: User;
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  isPending: state.contactUs.isPending,
  isCompleted: state.contactUs.isCompleted,
  statusText: state.contactUs.statusText,
});

const mapDispatch = {
  startContactUs: contactUs,
  stopContactUs: completeContactUs,
};

type Props = StateProps & typeof mapDispatch;

const ContactUsForm = memo(
  ({ user, isPending, isCompleted, statusText, startContactUs, stopContactUs }: Props) => {
    const handleFormSubmit = (values: ContactUsData) => {
      startContactUs(values);
    };
    const { t } = useTranslation('ContactUsPage');

    return (
      <S.ContactUsForm>
        <S.Title>{t('Write to us')}</S.Title>
        <Form
          initialValues={{ name: user && user.displayName, email: user && user.email }}
          onSubmit={handleFormSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                render={({ input }) => (
                  <S.InputWrapper
                    {...input}
                    required
                    label={t('Shared:Name')}
                    placeholder={t('Shared:Name')}
                  />
                )}
              />
              <Field
                name="email"
                type="email"
                render={({ input }) => (
                  <S.InputWrapper
                    {...input}
                    required
                    label={t('Email address')}
                    placeholder="Email"
                    validators={[emailValidator]}
                  />
                )}
              />
              <Field
                name="phone"
                type="tel"
                render={({ input }) => (
                  <S.InputWrapper
                    {...input}
                    required
                    label={t('Shared:Phone')}
                    placeholder={t('Shared:Phone')}
                  />
                )}
              />
              <Field
                name="message"
                render={({ input }) => (
                  <S.Label>
                    {t('Your question and booking details')}
                    <S.TextArea {...input} required />
                  </S.Label>
                )}
              />
              <ArrowButton disabled={isPending}>{t('Send')}</ArrowButton>
              {isCompleted && (
                <PopUpNotification message={t(statusText)} onConfirmButtonClick={stopContactUs} />
              )}
            </form>
          )}
        />
      </S.ContactUsForm>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(ContactUsForm);
export { ConnectedComponent as ContactUsForm };
