import { memo } from 'react';

import { FoodOrderForm } from '../FoodOrderForm/FoodOrderForm';
import * as S from './MainContent.styles';

const MainContent = memo(() => (
  <S.MainContent>
    <FoodOrderForm />
  </S.MainContent>
));

export { MainContent };
