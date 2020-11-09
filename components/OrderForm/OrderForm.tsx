import { Field, Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import { DropdownProps } from 'components/Dropdown/Dropdown.types';
import TimePicker from 'components/TimePicker/TimePicker';
import { formatNumber } from 'shared/helpers';

import PriceList from './components/PriceList/PriceList';
import * as S from './OrderForm.styles';
import { Item as PriceItem, MaxGuests } from './OrderForm.types';

type Props = {
  roomNumber: number;
  roomPrice: number;
  breakfastPricePerGuest: number;
  overcrowdingPrice: number;
  initialValues?: {
    booked: {
      from: number;
      to: number;
    };
    guests: {
      adults: number;
      children: number;
      babies: number;
    };
  };
  disabled?: boolean;
  priceItems?: PriceItem[];
  roomType?: string;
  currency?: string;
  measure?: string;
};

const handleFormSubmit = (values) => {
  // eslint-disable-next-line
  console.log(values)
};
const oneDay = 24 * 60 * 60 * 1000;

const defaultPrices: PriceItem[] = [
  {
    label: `Сбор за услуги: скидка 2${'\u00A0'}179₽`,
    price: -2179,
    tooltip: 'Подсказка Подсказка Подсказка Подсказка 2',
  },
  { label: 'Сбор за дополнительные услуги', price: 300, tooltip: 'Подсказка 2' },
];

const defaultMaxGuests: MaxGuests = {
  adults: 3,
  babies: 2,
};

const possibleExtraGuestsCount = 1;

const noFeeGuestsCount = 1;

const dropdownOptions: DropdownProps = {
  placeholder: 'Сколько гостей',
  name: 'guests',
  enableControls: true,
  groups: [
    {
      name: 'guests',
      max: defaultMaxGuests.adults + possibleExtraGuestsCount,
      wordForms: ['гость', 'гостя', 'гостей'],
    },
  ],
  items: [
    {
      title: 'взрослые',
      inputName: 'adults',
      groupName: 'guests',
    },
    {
      title: 'дети',
      inputName: 'children',
      groupName: 'guests',
    },
    {
      title: 'младенцы',
      inputName: 'babies',
      max: defaultMaxGuests.babies,
      wordForms: ['младенец', 'младенца', 'младенцев'],
    },
  ],
};

const getResultPrice = (prices: PriceItem[]): number =>
  Math.max(
    prices.reduce((acc, el) => acc + el.price, 0),
    0,
  );

const getDaysDifference = (dates: { from: number; to: number }) =>
  Math.round(Math.abs((dates.to - dates.from) / oneDay));

const OrderForm: React.FC<Props> = ({
  roomNumber,
  roomType,
  roomPrice,
  priceItems,
  overcrowdingPrice,
  breakfastPricePerGuest,
  initialValues,
  disabled = false,
  currency = 'RUB',
  measure = 'в сутки',
}: Props) => (
  <S.Container>
    <S.Title>Бронирование номера №{roomNumber}</S.Title>
    <Form
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, values, initialValues }) => {
        const dates: { from: number; to: number } = values.booked;
        const daysDifference = (dates && getDaysDifference(dates)) || 0;

        const getGuests = (guests) =>
          guests && {
            adults: guests.adults + guests.children,
            babies: guests.babies,
          };

        const initialDropdownValues = {
          items: dropdownOptions.items.map((item) => ({
            ...item,
            initialValue: initialValues.guests[item.inputName],
          })),
        };

        const guests: {
          adults: number;
          babies: number;
        } = getGuests(values.guests);

        const totalGuestsCount = guests ? guests.adults : 0;
        const billableGuests = Math.max(totalGuestsCount - noFeeGuestsCount, 0);

        const prices = [
          {
            label: `${formatNumber(roomPrice, currency)} х ${daysDifference} суток`,
            price: roomPrice * daysDifference,
          },
          {
            label: 'Сбор за гостей, начиная со второго',
            price: breakfastPricePerGuest * billableGuests,
          },
          ...(priceItems || defaultPrices),
        ];

        const extraGuestFee = {
          label: 'Оплата за дополнительного гостя',
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
                <S.Measure>{measure}</S.Measure>
              </S.Price>
            </S.RoomInfo>
            <S.Datepicker>
              <TimePicker
                type="double"
                dateFromLabelText="Прибытие"
                dateToLabelText="Выезд"
                name="booked"
                disabled={disabled}
                dateFrom={new Date(initialValues.booked.from)}
                dateTo={new Date(initialValues.booked.to)}
              />
            </S.Datepicker>
            <S.Dropdown>
              <S.DropdownLabel>гости</S.DropdownLabel>
              <Dropdown {...{ ...dropdownOptions, ...initialDropdownValues }} disabled={disabled} />
            </S.Dropdown>
            <S.PriceList>
              <PriceList items={prices} />
            </S.PriceList>
            <S.ResultWrapper>
              Итого
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
            {!disabled && <ArrowButton type="submit">Забронировать</ArrowButton>}
          </form>
        );
      }}
    />
  </S.Container>
);

export default OrderForm;
