import { memo, useState } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import ClipLoader from 'react-spinners/ClipLoader';

import { Dropdown, TimePicker } from 'shared/view/components';
import { guestsGroups, guestsItems } from 'shared/view/components/Dropdown/Dropdown.fixture';
import { ArrowButton } from 'shared/view/elements';

import { defaultFilters } from './SearchRoomForm.fixture';
import * as S from './SearchRoomForm.styles';

const defaultBookingDates = defaultFilters.booked;

const SearchRoomForm = memo(() => {
  const [isFormSubmission, setFormSubmission] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmission(true);
  };
  const { t } = useTranslation(['SearchRoomForm', 'RoomFilter']);

  return (
    <S.SearchRoomForm>
      <S.Title>{t('We will find rooms according to your wishes')}</S.Title>
      <Form
        initialValues={{
          booked: {
            from: defaultBookingDates.from,
            to: defaultBookingDates.to,
          },
          guests: Object.fromEntries(
            guestsItems
              .filter((item) => item.initialValue)
              .map((item) => [item.inputName, item.initialValue]),
          ),
        }}
        onSubmit={handleFormSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <S.TimePickerWrapper>
              <TimePicker
                type="double"
                name="booked"
                dateFromLabelText={t('Arrival')}
                dateToLabelText={t('Departure')}
                dateFrom={new Date(defaultBookingDates.from)}
                dateTo={new Date(defaultBookingDates.to)}
              />
            </S.TimePickerWrapper>
            <S.DropdownWrapper>
              <S.DropdownTitle>{t('RoomFilter:Guests')}</S.DropdownTitle>
              <Dropdown
                placeholder={t('How many guests')}
                name="guests"
                enableControls
                groups={guestsGroups}
                items={guestsItems}
              />
            </S.DropdownWrapper>
            {isFormSubmission ? (
              <S.ProcessButton isFilled isDisabled={isFormSubmission} type="button">
                {t('RoomFilter:Loading rooms ...')}
                <S.PreloaderWrapper>
                  <ClipLoader size={22} color="#FFF" />
                </S.PreloaderWrapper>
              </S.ProcessButton>
            ) : (
              <ArrowButton
                href={`/rooms/search-room?values=${JSON.stringify(values)}`}
                isFilled
                type="button"
                onClick={handleFormSubmit}
              >
                {t('Search for a room')}
              </ArrowButton>
            )}
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
});

export { SearchRoomForm };
