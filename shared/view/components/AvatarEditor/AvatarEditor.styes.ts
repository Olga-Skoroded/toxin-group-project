import styled, { css } from 'styled-components';

import { materialIcons, titles } from 'shared/styles/mixins';

const AvatarEditor = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      max-width: 35.7143rem;
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
    `;
  }}
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

const CropperTitle = styled.h3`
  ${titles.h3}
`;

export { AvatarEditor, Description, Controls, SliderWrapper, CancelButton, CropperTitle };
