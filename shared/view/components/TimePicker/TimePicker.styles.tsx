import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

type ContainerElement = {
  type?: 'single' | 'double';
};

const Container = styled.div`
  position: relative;
  display: flex;

  @media ${breakpointDown('xs')} {
    flex-direction: column;
  }
`;

const ExpandIcon = styled(ExpandMoreIcon)`
  background: white;
  position: absolute;
  bottom: 0.9rem;
  right: 1rem;
  cursor: pointer;
`;

const ContainerElement = styled.div<ContainerElement>`
  ${(props) => {
    const { type } = props;

    return css`
      position: relative;
      ${type === 'single' ? 'max-width: 19.0714rem;' : 'width: 100%;'}
      height: 100%;
      @media ${breakpointDown('xs')} {
        width: 100%;
      }

      & > div {
        padding: 0;
      }

      &:nth-child(1) {
        margin-right: ${type === 'double' ? '1.4rem' : 0};

        @media ${breakpointDown('xs')} {
          margin-bottom: 1.4rem;
          margin-right: 0;
        }
      }
    `;
  }}
`;

export { Container, ExpandIcon, ContainerElement };
