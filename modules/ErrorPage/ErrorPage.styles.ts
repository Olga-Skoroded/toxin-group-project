import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5714rem;
  flex: 1 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 2.8571rem;
`;

const Description = styled.p`
  margin-bottom: 1.4286rem;
`;

const Link = styled.a`
  text-decoration: none;
`;

export { Link, Container, Title, Description };
