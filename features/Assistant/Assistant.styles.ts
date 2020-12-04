import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

type Content = {
  isMinimized: boolean;
};

const Assistant = styled.div`
  width: 25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0.1429rem 0.5714rem 0.3571rem 0.1429rem #00000021;

  @media ${breakpointDown('lg')} {
    width: 100%;
  }
`;

const MessagesArea = styled.div`
  flex: 6;
  padding: 1rem;
  overflow: hidden;
  overflow-y: scroll;
`;

const DraggableForm = styled.form`
  z-index: 1000;
  position: fixed;

  @media ${breakpointDown('lg')} {
    width: 100%;
  }
`;

const ContentArea = styled.div<Content>`
  ${(props) => {
    const { isMinimized } = props;

    return css`
      display: flex;
      flex-direction: column;
      background: white;
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      height: ${isMinimized ? '0' : '34rem'};
      transition: all 0.2s ease-in-out;

      & button {
        opacity: ${isMinimized ? '0' : '1'};
        transition: opacity 0.2s ease-in-out;
      }
    `;
  }}
`;

export { Assistant, MessagesArea, DraggableForm, ContentArea };
