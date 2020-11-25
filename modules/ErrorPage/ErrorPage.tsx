import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { TextButton } from 'shared/view/elements';

import * as S from './ErrorPage.styles';

const ErrorPage: React.FC = () => {
  const { t } = useTranslation('ErrorPage');
  return (
    <MainLayout>
      <S.Container>
        <S.Title>{t('Error')} 404</S.Title>
        <S.Description>{t("We can't seem to find the page you're looking for.")}</S.Description>
        <Link href="/" passHref>
          <TextButton>{t('Back to Home')}</TextButton>
        </Link>
      </S.Container>
    </MainLayout>
  );
};

export { ErrorPage };
