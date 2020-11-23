import { makeStyles } from '@material-ui/core/styles';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { i18next } from 'services/i18next';
import { getNounInDeclension } from 'shared/helpers';
import { Avatar, LikeButton } from 'shared/view/elements';

import * as S from './Review.style';
import { DECLENSION, options } from './utils/dateOptions';

type Props = {
  avatarUrl: string;
  userName: string;
  date: Date;
  text: string;
  likesCount: number;
};

const Review = memo(({ avatarUrl, userName, date, text, likesCount }: Props) => {
  const useStyles = makeStyles(() => ({
    avatarReviews: { width: '3.42857rem', height: '3.42857rem' },
  }));
  const classes = useStyles();

  const { t } = useTranslation(['translations', 'WordForms']);

  const getReviewDate = (unformattedDate: Date): string => {
    const currentDate = Date.now();
    const timeHasPassed = currentDate - unformattedDate.getTime();

    const seconds = timeHasPassed / 1000;
    if (seconds < 60) {
      const roundedSeconds = Math.floor(seconds);

      return `${roundedSeconds} ${t(
        `WordForms:${getNounInDeclension(roundedSeconds, DECLENSION.seconds)}`,
      )} ${t('Ago')}`;
    }

    const minutes = seconds / 60;
    if (minutes < 60) {
      const roundedMinutes = Math.floor(minutes);

      return `${roundedMinutes} ${t(
        `WordForms:${getNounInDeclension(roundedMinutes, DECLENSION.minutes)}`,
      )} ${t('Ago')}`;
    }

    const hours = minutes / 60;
    if (hours < 24) {
      const roundedHours = Math.floor(hours);

      return `${roundedHours} ${t(
        `WordForms:${getNounInDeclension(roundedHours, DECLENSION.hours)}`,
      )} ${t('Ago')}`;
    }

    const days = hours / 24;
    if (days < 30) {
      const roundedDays = Math.floor(days);

      return `${roundedDays} ${t(
        `WordForms:${getNounInDeclension(roundedDays, DECLENSION.days)}`,
      )} ${t('Ago')}`;
    }

    return unformattedDate.toLocaleDateString(i18next.language, options);
  };

  return (
    <S.Review>
      <S.Header>
        <Avatar photoURL={`${avatarUrl}`} className={classes.avatarReviews} />
        <S.AuthorWrapper>
          <S.User>{userName}</S.User>
          <S.Date dateTime={date.toISOString()}>{getReviewDate(date)}</S.Date>
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
});

export { Review };
