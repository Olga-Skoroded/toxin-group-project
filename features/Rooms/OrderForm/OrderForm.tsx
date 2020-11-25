import { useRouter } from 'next/router';
import { memo, useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { SelectedBookedRoom } from 'redux/Booking/model';
import {
  booking,
  cancelBooking,
  completeBooking,
  completeCancelBooking,
} from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { Dropdown, TimePicker, PopUpNotification } from 'shared/view/components';
import { DropdownProps } from 'shared/view/components/Dropdown/Dropdown.model';
import { ArrowButton } from 'shared/view/elements';
import { formatNumber } from 'utils/number.utils';

import { PriceList } from './components/PriceList/PriceList';
import { PriceItem, MaxGuests } from './OrderForm.model';
import * as S from './OrderForm.styles';

type StateProps = {
  isBookingPending: boolean;
  isBookingSuccess: boolean;
  isBookingFailed: boolean;
  bookingStatusText: string;
  isCancelBookingPending: boolean;
  isCancelBookingSuccess: boolean;
  isCancelBookingFailed: boolean;
  cancelBookingStatusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isBookingPending: state.booking.isBookingPending,
  isBookingSuccess: state.booking.isBookingSuccess,
  isBookingFailed: state.booking.isBookingFailed,
  bookingStatusText: state.booking.bookingStatusText,
  isCancelBookingPending: state.booking.isCancelBookingPending,
  isCancelBookingSuccess: state.booking.isCancelBookingSuccess,
  isCancelBookingFailed: state.booking.isCancelBookingFailed,
  cancelBookingStatusText: state.booking.cancelBookingStatusText,
});

const mapDispatch = {
  startBooking: booking,
  stopBooking: completeBooking,
  startCancelBooking: cancelBooking,
  stopCancelBooking: completeCancelBooking,
};

type OwnProps = {
  roomNumber: number;
  roomPrice: number;
  breakfastPricePerGuest: number;
  overcrowdingPrice: number;
  isAuthSuccess: boolean;
  priceItems?: PriceItem[];
  roomType?: string;
  currency?: string;
  measure?: string;
  userEmail?: string;
  isСancellationForm?: boolean;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = Omit<SelectedBookedRoom, 'apartmentId' | 'user'>;

const oneDay = 24 * 60 * 60 * 1000;

const defaultMaxGuests: MaxGuests = {
  adults: 3,
  babies: 2,
};

const possibleExtraGuestsCount = 1;

const noFeeGuestsCount = 1;

const dropdownOptions: DropdownProps = {
  placeholder: 'RoomFilter:How many guests',
  name: 'guests',
  enableControls: true,
  groups: [
    {
      name: 'Guests',
      max: defaultMaxGuests.adults + possibleExtraGuestsCount,
      wordForms: ['Guest', 'GuestsSecondary', 'Guests'],
    },
  ],
  items: [
    {
      title: 'Adults',
      inputName: 'adults',
      groupName: 'Guests',
    },
    {
      title: 'Children',
      inputName: 'children',
      groupName: 'Guests',
    },
    {
      title: 'Babies',
      inputName: 'babies',
      max: defaultMaxGuests.babies,
      wordForms: ['Baby', 'Babies', 'BabiesSecondary'],
    },
  ],
};

const getResultPrice = (prices: PriceItem[]): number =>
  Math.max(
    prices.reduce((acc, el) => acc + el.price, 0),
    0,
  );

const getDaysDifference = (dates: { from: Date; to: Date }) =>
  Math.round(Math.abs((dates.to.getTime() - dates.from.getTime()) / oneDay));

const OrderForm = memo((props: Props) => {
  const {
    roomNumber,
    roomType,
    roomPrice,
    priceItems,
    overcrowdingPrice,
    breakfastPricePerGuest,
    isAuthSuccess,
    currency = 'RUB',
    measure = 'Per day',
    userEmail,
    isBookingPending,
    isBookingSuccess,
    isBookingFailed,
    bookingStatusText,
    isCancelBookingPending,
    isCancelBookingSuccess,
    isCancelBookingFailed,
    cancelBookingStatusText,
    isСancellationForm = false,
    startBooking,
    stopBooking,
    startCancelBooking,
    stopCancelBooking,
  } = props;

  const [isVisibleConfirm, setVisibleConfirm] = useState(false);

  const { t } = useTranslation(['OrderForm', 'WordForms', 'SearchRoomForm', 'Shared']);

  const defaultPrices: PriceItem[] = [
    {
      label: `${t('Service fee discount')} 2${'\u00A0'}179₽`,
      price: -2179,
      tooltip: 'Подсказка Подсказка Подсказка Подсказка 2',
    },
    { label: t('Additional service fee'), price: 300, tooltip: 'Подсказка 2' },
  ];

  const router = useRouter();

  const handleFormSubmit = (values: FormData) => {
    if (!isAuthSuccess) router.push('/auth/login');

    if (isСancellationForm) {
      startCancelBooking({
        apartmentId: roomNumber,
        booked: values.booked,
        user: userEmail,
      });
    } else {
      startBooking({
        ...values,
        user: userEmail,
        apartmentId: roomNumber,
      });
    }
  };

  const handleBookButtonClick = () => {
    setVisibleConfirm(true);
  };

  const handleConfirmButtonClick = () => {
    setTimeout(() => setVisibleConfirm(false));
  };

  const handleCancelButtonClick = () => {
    setVisibleConfirm(false);
  };

  useEffect(() => {
    if (isBookingSuccess) {
      stopBooking();
      router.push('/profile/selected-rooms');
    }
    if (isCancelBookingSuccess) {
      stopCancelBooking();
      router.push('/profile/selected-rooms');
    }
  }, [isBookingSuccess, stopBooking, isCancelBookingSuccess, stopCancelBooking, router]);

  return (
    <>
      <S.Container>
        <S.Title>{`${t('Room reservation')}#${roomNumber}`}</S.Title>
        <Form
          onSubmit={handleFormSubmit}
          render={({ handleSubmit, values }) => {
            const dates = values.booked;
            const daysDifference =
              (dates && dates.from && dates.to && getDaysDifference(dates)) || 0;
            const guests = values.guests && {
              adults: values.guests.adults + values.guests.children,
              babies: values.guests.babies,
            };

            const totalGuestsCount = guests ? guests.adults : 0;
            const billableGuests = Math.max(totalGuestsCount - noFeeGuestsCount, 0);

            const prices = [
              {
                label: `${formatNumber(roomPrice, currency)} х ${daysDifference}  ${t(
                  'WordForms:days',
                )}`,
                price: roomPrice * daysDifference,
              },
              {
                label: t('Fee for guests from the second'),
                price: breakfastPricePerGuest * billableGuests,
              },
              ...(priceItems || defaultPrices),
            ];

            const extraGuestFee = {
              label: t('Payment for an additional guest'),
              price: overcrowdingPrice,
            };

            if (totalGuestsCount > defaultMaxGuests.adults) {
              prices.push(extraGuestFee);
            }

            return (
              <form onSubmit={handleSubmit}>
                <S.RoomInfo>
                  <S.RoomNumber>
                    <S.NumberSign>№</S.NumberSign>
                    {roomNumber}
                    {roomType && <S.RoomType>{roomType}</S.RoomType>}
                  </S.RoomNumber>
                  <S.Price>
                    {formatNumber(roomPrice, currency)}
                    <S.Measure>{t(`WordForms:${measure}`)}</S.Measure>
                  </S.Price>
                </S.RoomInfo>
                <S.Datepicker>
                  <TimePicker
                    type="double"
                    dateFromLabelText={t('SearchRoomForm:Arrival')}
                    dateToLabelText={t('SearchRoomForm:Departure')}
                    name="booked"
                    disabled={isСancellationForm}
                  />
                </S.Datepicker>
                <S.Dropdown>
                  <S.DropdownLabel>{t('RoomFilter:Guests')}</S.DropdownLabel>
                  <Dropdown {...dropdownOptions} disabled={isСancellationForm} />
                </S.Dropdown>
                <S.PriceList>
                  <PriceList items={prices} />
                </S.PriceList>
                <S.ResultWrapper>
                  {t('Shared:Total')}
                  <S.Dots />
                  <S.ResultPrice>
                    <Field
                      type="hidden"
                      render={({ input }) => {
                        setTimeout(() => input.onChange(getResultPrice(prices)));
                        return <input {...input} />;
                      }}
                      name="totalPrice"
                    />
                    {formatNumber(getResultPrice(prices), currency)}
                  </S.ResultPrice>
                </S.ResultWrapper>
                <ArrowButton
                  type="button"
                  disabled={isVisibleConfirm || isBookingPending || isCancelBookingPending}
                  onClick={handleBookButtonClick}
                >
                  {isСancellationForm ? t('OrderForm:Сancel booking') : t('OrderForm:Book now')}
                </ArrowButton>
                {isVisibleConfirm && (
                  <PopUpNotification
                    message={
                      isСancellationForm
                        ? t('Are you sure you want to cancel this room reservation?')
                        : t('Are you sure you want to book this room?')
                    }
                    typeConfirmButton="submit"
                    withCancelButton
                    onConfirmButtonClick={handleConfirmButtonClick}
                    onCancelButtonClick={handleCancelButtonClick}
                  />
                )}
                {isBookingFailed && (
                  <PopUpNotification
                    message={t(`OrderForm:${bookingStatusText}`)}
                    onConfirmButtonClick={stopBooking}
                  />
                )}
                {isCancelBookingFailed && (
                  <PopUpNotification
                    message={t(`OrderForm:${cancelBookingStatusText}`)}
                    onConfirmButtonClick={stopCancelBooking}
                  />
                )}
              </form>
            );
          }}
        />
      </S.Container>
    </>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(OrderForm);
export { ConnectedComponent as OrderForm };
