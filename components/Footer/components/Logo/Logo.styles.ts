import styled, { css } from 'styled-components';

const Container = styled.div``;

const Description = styled.p`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      max-width: 18.5714rem;
      margin: 0;
      color: ${colors.basicDark};
      line-height: ${typography.lineHeight};

      @media (max-width: 900px) {
        display: none;
      }
    `;
  }}
`;

const ImgContainer = styled.div`
  margin-bottom: 1.4286rem;
`;

export { Container, Description, ImgContainer };
