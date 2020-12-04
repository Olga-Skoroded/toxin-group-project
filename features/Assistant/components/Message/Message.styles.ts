import styled, { css, keyframes } from 'styled-components';

type Message = {
  type: 'from' | 'to';
};

const MessageFadeInAnimation = keyframes`
  0% { transform: translateY(1rem); }
  100% { transform: translateY(0); }
`;

const Container = styled.div<Message>`
  ${(props) => {
    const { type } = props;

    return css`
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: ${type === 'from' ? 'flex-end' : 'flex-start'};
      transform: translateY(1rem);
      transition: 1s;
      animation: ${MessageFadeInAnimation} 0.2s 1;
      animation-fill-mode: forwards;
    `;
  }}
`;

const Author = styled.span``;

const Message = styled.div<Message>`
  ${(props) => {
    const { colors } = props.theme;
    const { type } = props;

    return css`
      background: ${type === 'from' ? colors.secondary : colors.basicLightest};
      margin: 0.5rem 0;
      width: fit-content;
      border-radius: 0.5rem;
      color: ${type === 'to' ? 'black' : 'white'};
    `;
  }}
`;

const MessageElement = styled.div`
  margin: 1rem;
`;

export { Container, Author, Message, MessageElement };
