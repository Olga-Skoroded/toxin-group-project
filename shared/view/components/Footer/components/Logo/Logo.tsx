import { memo } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { Logo as LogoImg } from 'shared/view/elements';

import { LogoProps } from '../../Footer.model';
import * as S from './Logo.styles';

type Props = WithTranslation & LogoProps;

const Logo = memo(({ description, t }: Props) => (
  <S.Container>
    <S.ImgContainer>
      <LogoImg />
    </S.ImgContainer>
    <S.Description>{t(`Footer:${description}`)}</S.Description>
  </S.Container>
));

const TranslatedComponent = withTranslation()(Logo);
export { TranslatedComponent as Logo };
