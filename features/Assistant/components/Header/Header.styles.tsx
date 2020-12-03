import styled, { css } from 'styled-components';

const Header = styled.header`
  ${(props) => {
    const { theme } = props;

    return css`
      min-height: 5rem;
      background: ${theme.colors.primary};
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: white;
      font-size: 1.3rem;
      flex: 1;
      cursor: all-scroll;
    `;
  }}
`;

const Avatar = styled.span`
  width: 3.42857rem;
  height: 3.42857rem;
  overflow: hidden;
  user-select: none;
  border-radius: 50%;
`;

export { Header, Avatar };
