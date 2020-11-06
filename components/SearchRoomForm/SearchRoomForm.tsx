import { useState } from 'react';
import { Form } from 'react-final-form';
import ClipLoader from 'react-spinners/ClipLoader';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems } from 'components/Dropdown/Dropdown.data';
import TimePicker from 'components/TimePicker/TimePicker';

import defaultFilters from './defaultFilters';
import * as S from './SearchRoomForm.styles';

type SearchRoomFormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const defaultBookingDates = defaultFilters.booked;

const SearchRoomForm: React.FC<SearchRoomFormProps> = ({ onSubmit }: SearchRoomFormProps) => {
  const [isFormSubmission, setFormSubmission] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmission(true);
  };

  return (
    <S.SearchRoomForm>
      <S.Title>Найдём номера под ваши пожелания</S.Title>
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
                dateFromLabelText="прибытие"
                dateToLabelText="выезд"
                dateFrom={new Date(defaultBookingDates.from)}
                dateTo={new Date(defaultBookingDates.to)}
              />
            </S.TimePickerWrapper>
            <S.DropdownWrapper>
              <S.DropdownTitle>гости</S.DropdownTitle>
              <Dropdown
                placeholder="Сколько гостей"
                name="guests"
                enableControls
                groups={guestsGroups}
                items={guestsItems}
              />
            </S.DropdownWrapper>
            {isFormSubmission ? (
              <S.ProcessButton isFilled isDisabled={isFormSubmission} type="button">
                Загружаем номера...
                <S.PreloaderWrapper>
                  <ClipLoader size={22} color="#FFF" />
                </S.PreloaderWrapper>
              </S.ProcessButton>
            ) : (
              <ArrowButton
                href={`/search-room?values=${JSON.stringify(values)}`}
                isFilled
                type="button"
                onClick={handleFormSubmit}
              >
                Подобрать номер
              </ArrowButton>
            )}
          </form>
        )}
      />
    </S.SearchRoomForm>
  );
};

export default SearchRoomForm;
