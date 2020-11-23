import { memo } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { SubscriptionField } from 'features/Auth/SubscriptionField/SubscriptionField';

import { SubscriptionProps } from '../../Footer.model';
import * as S from './Subscription.styles';

type Props = WithTranslation & SubscriptionProps;

const Subscription = memo(({ title, text, t }: Props) => (
  <S.Container>
    <S.Title>{t(`Footer:${title}`)}</S.Title>
    <S.Description>{t(`Footer:${text}`)}</S.Description>
    <S.FieldContainer>
      <SubscriptionField placeholder="Email" />
    </S.FieldContainer>
  </S.Container>
));

const TranslatedComponent = withTranslation()(Subscription);
export { TranslatedComponent as Subscription };
