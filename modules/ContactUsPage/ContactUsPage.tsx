import { memo } from 'react';

import { ContactUsForm } from 'features/ContactUs/ContactUsForm/ContactUsForm';
import { MainLayout } from 'features/shared/MainLayout/MainLayout';

import * as S from './ContactUsPage.styles';

const ContactUsPage = memo(() => (
  <MainLayout>
    <S.Container>
      <ContactUsForm />
    </S.Container>
  </MainLayout>
));

export { ContactUsPage };
