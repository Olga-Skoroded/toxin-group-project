import styled, { css } from 'styled-components';

type ButtonsProps = {
  withCancelButton: boolean;
};

const PopUpNotification = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 20rem;
      padding: 1.5rem 3rem;
      background: ${colors.defaultBackground};
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
    `;
  }}
`;

const Message = styled.p`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Buttons = styled.div<ButtonsProps>`
  ${(props) => {
    const { withCancelButton } = props;
    return css`
      width: 80%;
      display: flex;
      justify-content: ${withCancelButton ? 'space-between' : 'center'};
    `;
  }}
`;

export { PopUpNotification, Message, Buttons };
