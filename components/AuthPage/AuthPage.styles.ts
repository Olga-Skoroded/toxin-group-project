import styled from 'styled-components';

const Container = styled.div`
  background: url('./img/auth-register.jpg') bottom / cover no-repeat;
  min-height: 50.2rem;
  padding: 12.25rem 8rem;

  & > section {
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    min-height: 40.2rem;
    padding: 10rem 6rem;
  }

  @media (max-width: 992px) {
    min-height: 30.2rem;
  }

  @media (max-width: 576px) {
    min-height: 20.2rem;
    padding: 0.7rem;
  }
`;

export { Container };
