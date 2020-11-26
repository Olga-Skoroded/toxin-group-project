import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { visuallyHidden } from 'shared/styles/mixins';

const EditAvatar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 0.0714rem solid rgba(31, 32, 65, 0.1);
`;

const AvatarWrapper = styled.div`
  width: max-content;
`;

const Title = styled.h3`
  margin: 0 0.5rem 0.5rem 0;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const HiddenInput = styled.input`
  ${visuallyHidden}
`;

const EditButtonWrapper = styled.label`
  cursor: pointer;
`;

const EditButton = styled.span`
  ${(props) => {
    const { colors, typography } = props.theme;

    return css`
      text-transform: uppercase;
      font: 700 0.8571rem ${typography.fontName};
      background-color: transparent;
      border: 0;
      cursor: pointer;
      text-decoration: none;
      color: ${colors.primary};

      &:hover {
        outline: 0;
        color: ${lighten(0.1, colors.primary)};
      }
    `;
  }}
`;

export { EditAvatar, AvatarWrapper, Title, Buttons, EditButtonWrapper, EditButton, HiddenInput };
