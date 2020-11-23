import styled, { css } from 'styled-components';

type TitleProps = {
  titleFontSize: string;
};

type ExampleProps = {
  exampleFontSize: string;
  exampleType: string;
};

const Type = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto minmax(auto, 24rem);
  grid-gap: 3.571rem 2.143rem;
`;

const Title = styled.div<TitleProps>`
  ${(props) => {
    const { titleFontSize } = props;
    const { colors } = props.theme;
    return css`
      font-size: ${titleFontSize};
      text-align: right;
      color: ${colors.basicLight};
    `;
  }}
`;

const Example = styled.div<ExampleProps>`
  ${(props) => {
    const { exampleType, exampleFontSize } = props;
    const { colors, typography } = props.theme;
    return css`
      font-weight: ${exampleType === 'Body' ? 'normal' : 'bold'};
      line-height: ${exampleType === 'Body' ? typography.lineHeight : '1.27'};
      font-size: ${exampleFontSize};
      font-family: ${exampleType === 'H3' || exampleType === 'Body'
        ? typography.fontName
        : typography.secondaryFontName};
      text-transform: ${exampleType === 'H3' ? 'uppercase' : 'none'};
      color: ${colors.basicDarkest};
    `;
  }}
`;

export { Type, Title, Example };
