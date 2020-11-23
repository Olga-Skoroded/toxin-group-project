import MaskedInput from 'react-text-mask';
import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Input = styled.div`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      position: relative;
      padding-bottom: 1.25rem;
      width: 100%;
      font-family: ${typography.fontName};
    `;
  }}
`;

const LabelText = styled.span`
  ${titles.h3}
  display: inline-block;
  margin-bottom: 0.3rem;
  cursor: pointer;
`;

const MaskedField = styled(MaskedInput)`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      width: 100%;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};
      padding: 0.9643rem;
      font-family: inherit;

      &::placeholder {
        color: ${colors.basicLight};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;

        ::placeholder {
          color: ${colors.basicDark};
        }
      }
    `;
  }}
`;

const Field = styled.input`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      width: 100%;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};
      padding: 0.9643rem;
      font-family: inherit;

      &::placeholder {
        color: ${colors.basicLight};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;

        ::placeholder {
          color: ${colors.basicDark};
        }
      }
    `;
  }}
`;

const ErrorMessage = styled.p`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      position: absolute;
      height: 0.8571rem;
      font-size: 0.8571rem;
      color: ${colors.error};
    `;
  }}
`;

export { Input, LabelText, MaskedField, Field, ErrorMessage };
