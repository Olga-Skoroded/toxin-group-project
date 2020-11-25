import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { container, titles } from 'shared/styles/mixins';

const MainContent = styled.main`
  ${container};
  padding: 5rem;

  @media ${breakpointDown('xs')} {
    padding: 2rem 1rem;
  }
`;

const Navigation = styled.section``;

const Title = styled.h1`
  ${titles.h1};
  margin-bottom: 1rem;
`;

const Map = styled.iframe`
  width: 100%;
  min-height: 50rem;
  margin-bottom: 3.5715rem;
  border: none;

  @media ${breakpointDown('xs')} {
    min-height: 30rem;
  }
`;

const Address = styled.address`
  margin-bottom: 2rem;
`;

const TaxiContainer = styled.div``;

const TaxiList = styled.ul`
  display: flex;
  gap: 3.5715rem;
  list-style: none;
`;

const TaxiTitle = styled.h2`
  ${titles.h2};
  margin-bottom: 1.7857rem;
`;

const Taxi = styled.h3`
  ${titles.h3};
  margin-bottom: 1.4286rem;
`;

const TaxiOption = styled.li``;

export {
  MainContent,
  Navigation,
  Title,
  Map,
  Address,
  TaxiContainer,
  TaxiList,
  Taxi,
  TaxiOption,
  TaxiTitle,
};
