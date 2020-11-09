import React, { useState } from 'react';

import AccountEntry from 'components/AccountEntry/AccountEntry';
import ForgotPasswordForm from 'components/ForgotPasswordForm/ForgotPasswordForm';
import OrderForm from 'components/OrderForm/OrderForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Room from 'components/Room/Room';
import Rooms from 'components/Rooms/Rooms';
import roomsList from 'components/Rooms/Rooms.data';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './CardsPage.styles';

const CardsPage: React.FC = (): JSX.Element => {
  const [rooms, setRooms] = useState([]);

  Promise.resolve(roomsList).then((data) => setRooms(data));

  // eslint-disable-next-line no-console
  const mockAuthFunction = () => console.log('Auth is done!');

  return (
    <S.Container>
      <SearchRoomForm />
      <OrderForm
        isAuthSuccess
        overcrowdingPrice={700}
        breakfastPricePerGuest={300}
        roomNumber={888}
        roomType="люкс"
        roomPrice={9990}
        userEmail="cardsPage@mail.ru"
        confirmBookedRoom={() => true}
      />
      <S.RoomsWrapper>
        <Rooms rooms={rooms} />
      </S.RoomsWrapper>
      <Room price={9900} number={888} reviews={[]} />
      <Room price={9900} number={888} reviews={[]} roomType="люкс" />
      <S.SearchRoomFormWrapper>
        <SearchRoomForm />
      </S.SearchRoomFormWrapper>
      <S.RegistrationFormWrapper>
        <RegistrationForm
          isSuccess
          isProcess
          statusText=""
          requestRegistration={mockAuthFunction}
          stopRegistration={mockAuthFunction}
        />
      </S.RegistrationFormWrapper>
      <S.AccountEntryWrapper>
        <AccountEntry
          isAuthSuccess={false}
          isAuthProcessNow={false}
          authStatusText=""
          requestToAuthWithGoogle={mockAuthFunction}
          requestToAuth={mockAuthFunction}
          breakAuthProcess={mockAuthFunction}
        />
      </S.AccountEntryWrapper>
      <S.ForgotPasswordWrapper>
        <ForgotPasswordForm />
      </S.ForgotPasswordWrapper>
    </S.Container>
  );
};

export default CardsPage;
