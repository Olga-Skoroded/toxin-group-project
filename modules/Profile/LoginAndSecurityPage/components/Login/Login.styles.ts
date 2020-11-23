import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Login = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      position: relative;
      width: 100%;
      padding: 2rem 0;
      border-bottom: 0.0714rem solid ${colors.basicPale};
    `;
  }}
`;

const Title = styled.h2`
  ${titles.h2};
  margin-bottom: 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Subtitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  position: relative;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

export { Login, Title, Header, Subtitle, Content, Description };
