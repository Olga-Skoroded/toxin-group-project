import { memo } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { CopyrightProps } from '../../Footer.model';
import * as S from './Copyright.styles';

type Props = WithTranslation & CopyrightProps;

const Copyright = memo(({ copyrightText, t }: Props) => (
  <S.Copyright>{t(`Footer:${copyrightText}`)}</S.Copyright>
));

const TranslatedComponent = withTranslation()(Copyright);
export { TranslatedComponent as Copyright };
