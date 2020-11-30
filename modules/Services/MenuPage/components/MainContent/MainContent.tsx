import { FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { getFoodData as getFoodDataRequest } from 'redux/Food/redux/actions';
import { AppState } from 'redux/store.model';
import { FoodData } from 'services/api/entities/model';
import { Preloader } from 'shared/view/elements';

import { FoodCard } from '../FoodCard/FoodCard';
import { foodCategories } from './MainContent.fixture';
import * as S from './MainContent.styles';

type StateProps = {
  isPending: boolean;
  foodData: FoodData;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.food.isGetFoodDataPending,
  foodData: state.food.foodData,
});

const mapDispatch = {
  startGetFoodData: getFoodDataRequest,
};

type Props = StateProps & typeof mapDispatch;

const MainContent = memo(({ isPending, foodData, startGetFoodData }: Props) => {
  const getFoodData = useCallback(() => {
    startGetFoodData();
  }, [startGetFoodData]);

  useEffect(() => {
    getFoodData();
  }, [getFoodData]);

  const [category, setCategory] = useState('snacks');

  const { t } = useTranslation('MenuPage');

  const categories = {
    snacks: t('Snacks'),
    'hot-dishes': t('Hot dishes'),
    soups: t('Soups'),
  };

  const handleSelectChange = (e: FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setCategory(target.value);
  };

  return (
    <>
      {isPending && (
        <S.Loading>
          <Preloader label={t('Loading restaurant menu...')} />
        </S.Loading>
      )}
      {foodData ? (
        <S.MainContent>
          <S.Header>
            <S.Title>{categories[category]}:</S.Title>
            <S.Select onChange={handleSelectChange}>
              {Object.entries(foodCategories).map(([key, value]) => (
                <S.Option key={key} value={key}>
                  {t(value)}
                </S.Option>
              ))}
            </S.Select>
          </S.Header>
          <S.List>
            {Object.entries(foodData[category]).map(([title, data]) => (
              <S.Item key={title}>
                <FoodCard title={title} {...data} />
              </S.Item>
            ))}
          </S.List>
        </S.MainContent>
      ) : (
        !isPending && <S.Loading>{t('Failed to load restaurant menu')}</S.Loading>
      )}
    </>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(MainContent);
export { ConnectedComponent as MainContent };
