import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

type ContentProps = {
  isOpen: boolean;
};

const Expander = styled.div`
  width: 100%;
`;

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const Title = styled.h3`
  ${titles.h3}
`;

const Content = styled.div<ContentProps>`
  ${(props) => {
    const { isOpen } = props;
    return css`
      height: ${isOpen ? 'auto' : '0'};
      visibility: ${isOpen ? 'visible' : 'hidden'};
      opacity: ${isOpen ? '1' : '0'};
      transition: opacity 0.4s;
      overflow: ${isOpen ? 'visible' : 'hidden'};
      padding: 1.1rem 0 0.2143rem;
    `;
  }}
`;

export { Expander, Header, Title, Content };
