import { Snackbar } from '@material-ui/core';
import styled, { css } from 'styled-components';

import { visuallyHidden, materialIcons, titles } from 'shared/styles/mixins';

const AvatarLoader = styled.div`
  position: relative;
`;

const CancelButton = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      ${materialIcons}
      background-color: ${colors.basicLight};
      font-size: 1.7rem;
      cursor: pointer;
      align-self: flex-end;

      &:hover {
        background-color: ${colors.basicLightest};
      }

      &:before {
        content: 'close';
      }
    `;
  }}
`;

const AvatarWrapper = styled.label`
  cursor: pointer;
`;

const UploadButton = styled.span`
  ${(props) => {
    const { gradients } = props.theme;

    return css`
      ${materialIcons}
      font-size: 1.7rem;
      background-image: ${gradients.primary};
      cursor: pointer;
      position: absolute;
      top: 5.5rem;
      left: 5.5rem;
      z-index: 10;

      &:before {
        content: 'add_circle';
      }

      &:hover,
      &:focus {
        background-image: ${gradients.primaryLight};
      }
    `;
  }}
`;

const HiddenInput = styled.input`
  ${visuallyHidden}
`;

const Description = styled.p`
  font-size: 0.8571rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Controls = styled.div`
  width: 70%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
`;

const CropperWrapper = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      max-width: 35.7143rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      padding: 1rem 2.1rem 2rem 2.1rem;
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      border-radius: 0.2857rem;
      background: ${colors.defaultBackground};
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      justify-content: center;
      z-index: 20;
    `;
  }}
`;

const CropperTitle = styled.h3`
  ${titles.h3}
`;

const CustomSnackbar = styled(Snackbar)`
  & > div {
    background: darkred;
  }
`;

export {
  AvatarLoader,
  AvatarWrapper,
  CancelButton,
  UploadButton,
  HiddenInput,
  CropperWrapper,
  CropperTitle,
  Description,
  Controls,
  CustomSnackbar,
  SliderWrapper,
};
