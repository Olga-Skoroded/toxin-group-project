import { cardsData } from './Cards.data';
import * as S from './Cards.styles';

const Cards = (): JSX.Element => (
  <S.Cards>
    {cardsData.map(({ title, description, href }) => (
      <S.Item key={title}>
        <S.Card href={href}>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Card>
      </S.Item>
    ))}
  </S.Cards>
);

export default Cards;
