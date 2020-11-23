import styled, { css } from 'styled-components';

const Review = styled.article``;

const Header = styled.header`
  display: flex;
`;

const AuthorWrapper = styled.p`
  display: flex;
  flex-direction: column;
  margin-left: 0.714rem;
`;

const User = styled.span`
  font-weight: bold;
  padding-top: 0.3rem;
`;

const Date = styled.time`
  padding-top: 0.42857rem;
`;

const MessageWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const LeftWrapper = styled.div`
  margin: 0 1rem 0 0.4rem;
`;

const Text = styled.p`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      line-height: ${typography.lineHeight};
    `;
  }}
`;

export { Review, Header, AuthorWrapper, User, Date, MessageWrapper, LeftWrapper, Text };
