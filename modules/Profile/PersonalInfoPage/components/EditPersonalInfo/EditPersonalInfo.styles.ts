import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h3`
  margin: 0 0.5rem 0.5rem 0;
`;

const Content = styled.div`
  position: relative;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

export { Header, Title, Content, Description };
