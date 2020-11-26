import { Map as YMap } from 'react-yandex-maps';
import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { container, titles } from 'shared/styles/mixins';

const MainContent = styled.div`
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

const Map = styled(YMap)`
  width: 100%;
  min-height: 50rem;

  @media ${breakpointDown('xs')} {
    min-height: 30rem;
  }
`;

const Address = styled.address`
  margin-bottom: 2rem;
`;

export { MainContent, Navigation, Title, Map, Address };
