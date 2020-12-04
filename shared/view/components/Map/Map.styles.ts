import { Map as YMap } from 'react-yandex-maps';
import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

const Map = styled(YMap)`
  width: 100%;
  min-height: 50rem;

  @media ${breakpointDown('xs')} {
    min-height: 30rem;
  }
`;

export { Map };
