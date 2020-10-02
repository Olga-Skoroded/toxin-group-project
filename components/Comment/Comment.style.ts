import styled, { css } from 'styled-components';

const Comment = styled.article``;

const Header = styled.header`
  display: grid;
  grid-template-columns: 3.4285rem 1fr;
  gap: 0 0.714rem;
`;

const Avatar = styled.img`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      grid-row: 1 / 3;
      max-width: 3.4rem;
      border-radius: 50%;
      border: 0.15rem solid ${colors.defaultBackground};
      box-shadow: 0 0.7143rem 1.4286rem ${colors.basicLightest};
    `;
  }}
`;

const User = styled.span`
  font-weight: bold;
  padding-top: 0.3rem;
`;

const Date = styled.time`
  padding-top: 0.5rem;
`;

const MessageWrapper = styled.div`
  display: flex;
  margin-top: 1.08rem;
`;

const LeftWrapper = styled.div`
  margin: 0 1rem 0 0.4rem;
`;

const Text = styled.p`
  line-height: 1.7rem;
`;

export { Comment, Header, Avatar, User, Date, MessageWrapper, LeftWrapper, Text };
