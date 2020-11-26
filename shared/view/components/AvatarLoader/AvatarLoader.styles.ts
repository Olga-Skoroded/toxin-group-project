import { Snackbar } from '@material-ui/core';
import styled, { css } from 'styled-components';

import { visuallyHidden, materialIcons } from 'shared/styles/mixins';

const AvatarLoader = styled.div`
  position: relative;
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

const CropperWrapper = styled.div`
  max-width: max-content;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
`;

const CustomSnackbar = styled(Snackbar)`
  & > div {
    background: darkred;
  }
`;

export { AvatarLoader, AvatarWrapper, UploadButton, HiddenInput, CropperWrapper, CustomSnackbar };
