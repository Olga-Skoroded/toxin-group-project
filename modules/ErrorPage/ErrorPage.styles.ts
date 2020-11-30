import styled from 'styled-components';

import { container, titles } from 'shared/styles/mixins';

const Container = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.5714rem auto;
  flex: 1 0 auto;
`;

const Title = styled.h1`
  ${titles.h1}
  margin-bottom: 2.8571rem;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 1.4286rem;
`;

const Link = styled.a`
  text-decoration: none;
`;

export { Link, Container, Title, Description };
