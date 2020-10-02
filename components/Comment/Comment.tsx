import LikeButton from 'components/LikeButton/LikeButton';

import * as S from './Comment.style';
import getHowMuchTimeHasPassed from './utils/getHowMuchTimeHasPassed';

type Comment = {
  avatarUrl: string;
  userName: string;
  date: string;
  text: string;
  likesCount: number;
};

const Comment: React.FC<Comment> = ({ avatarUrl, userName, date, text, likesCount }: Comment) => (
  <S.Comment>
    <S.Header>
      <S.Avatar alt={userName} src={`/img/${avatarUrl}`} />
      <S.User>{userName}</S.User>
      <S.Date dateTime={new Date(date).toISOString()}>{getHowMuchTimeHasPassed(date)}</S.Date>
    </S.Header>
    <S.MessageWrapper>
      <S.LeftWrapper>
        <LikeButton count={likesCount} isActive />
      </S.LeftWrapper>
      <S.Text>{text}</S.Text>
    </S.MessageWrapper>
  </S.Comment>
);

export default Comment;
