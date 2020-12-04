import { memo } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'redux/store.model';
import { Filters, Apartment } from 'services/api/entities/model';
import { Room } from 'shared/view/components';
import { ArrowButton } from 'shared/view/elements';

import * as S from './Message.styles';

type StateProps = {
  findRoomFilter: Filters;
};

const mapState = (state: AppState): StateProps => ({
  findRoomFilter: state.assistant.findRoomFilter,
});

type Props = {
  name: string;
  text: string;
  type: 'from' | 'to';
  data?: { type: string; payload: Apartment[] };
} & ReturnType<typeof mapState>;

const Message = memo(
  ({ name, text, type, data, findRoomFilter }: Props): JSX.Element => {
    return (
      <S.Container type={type}>
        <S.Author>{name}</S.Author>
        <S.Message type={type}>
          <S.MessageElement>{text}</S.MessageElement>
          {!!data &&
            data.type === 'rooms' &&
            data.payload.slice(0, 2).map((room, index) => (
              <S.MessageElement key={String(index)}>
                <Room number={room.id} {...room} />
              </S.MessageElement>
            ))}
          {!!data && data.payload.length > 2 && (
            <S.MessageElement>
              <ArrowButton href={`/rooms/search-room?values=${JSON.stringify(findRoomFilter)}`}>
                Показать ещё
              </ArrowButton>
            </S.MessageElement>
          )}
        </S.Message>
      </S.Container>
    );
  },
);

const ConnectedComponent = connect(mapState)(Message);

export { ConnectedComponent as Message };
