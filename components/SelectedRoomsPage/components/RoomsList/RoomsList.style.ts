import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19.2857rem, 1fr));
  justify-items: center;
  gap: 2rem;
`;

const Price = styled.span`
  display: flex;
  flex-direction: column;

  & > span {
    margin-top: 0.4rem;
    text-align: center;
  }
`;

const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  width: 100%;
`;

const PriceDescription = styled.span``;

export { Container, Price, RoomWrapper, PriceDescription };
