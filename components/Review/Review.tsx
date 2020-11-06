import { makeStyles } from '@material-ui/core/styles';

import { Timestamp } from 'api/Firebase/modules/Database/types';
import Avatar from 'components/Avatar/Avatar';
import LikeButton from 'components/LikeButton/LikeButton';

import * as S from './Review.style';
import getReviewDate from './utils/getReviewDate';

type Props = {
  avatarUrl: string;
  userName: string;
  date: Timestamp | Date;
  text: string;
  likesCount: number;
};

const Review = ({ avatarUrl, userName, date, text, likesCount }: Props): JSX.Element => {
  const correctDate = date instanceof Date ? date : date.toDate();

  const useStyles = makeStyles(() => ({
    avatarReviews: { width: '3.42857rem', height: '3.42857rem' },
  }));
  const classes = useStyles();

  return (
    <S.Review>
      <S.Header>
        <Avatar photoURL={`${avatarUrl}`} className={classes.avatarReviews} />
        <S.AuthorWrapper>
          <S.User>{userName}</S.User>
          <S.Date dateTime={correctDate.toISOString()}>{getReviewDate(correctDate)}</S.Date>
        </S.AuthorWrapper>
      </S.Header>
      <S.MessageWrapper>
        <S.LeftWrapper>
          <LikeButton count={likesCount} isActive />
        </S.LeftWrapper>
        <S.Text>{text}</S.Text>
      </S.MessageWrapper>
    </S.Review>
  );
};

export default Review;
