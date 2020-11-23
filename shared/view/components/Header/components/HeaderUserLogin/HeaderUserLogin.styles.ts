import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { Button } from 'shared/view/elements';

const HeaderUserLogin = styled.div`
  display: flex;

  @media ${breakpointDown('lg')} {
    padding: 1.4286rem 0;
  }

  @media ${breakpointDown('xs')} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderLoginButton = styled(Button)`
  &:not(:last-child) {
    margin-right: 1.4286rem;
  }

  @media ${breakpointDown('xs')} {
    margin: 0;

    &:not(:last-child) {
      margin: 0 0 1.4286rem;
    }
  }
`;

export { HeaderUserLogin, HeaderLoginButton };
