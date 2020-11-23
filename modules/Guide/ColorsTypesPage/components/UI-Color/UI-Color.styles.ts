import styled, { css } from 'styled-components';

type PaletteProps = {
  paletteColor: string;
  paletteOpacity: number;
};

const Color = styled.div`
  display: flex;
  align-items: center;
`;

const Palette = styled.div<PaletteProps>`
  ${(props) => {
    const { paletteColor, paletteOpacity } = props;
    return css`
      width: 5rem;
      height: 5rem;
      border-radius: 0.4285rem;
      background: ${paletteColor};
      opacity: ${paletteOpacity};
      flex-shrink: 0;
    `;
  }}
`;

const Description = styled.div`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      color: ${colors.basicDarkest};
      font-family: ${typography.secondaryFontName};
      font-size: 1.357rem;
      padding-left: 2.8571rem;
      line-height: 1.5;
    `;
  }}
`;

const Title = styled.div`
  font-weight: bold;
`;

export { Color, Palette, Description, Title };
