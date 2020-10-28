import React, { useState } from 'react';
import { Field } from 'react-final-form';

import Calendar from '../Calendar/Calendar';
import Input from '../Input/Input';
import * as S from './TimePicker.styles';

type Props = {
  name: string;
  disabled?: boolean;
  dateFrom?: Date;
  dateTo?: Date;
  dateFromLabelText?: string;
  dateToLabelText?: string;
  onChange?: (e: React.ChangeEvent) => void;
} & S.ContainerElement;

const TimePicker = ({
  type,
  dateFrom,
  dateTo,
  name,
  dateFromLabelText,
  dateToLabelText,
  disabled = false,
}: Props): JSX.Element => {
  const [isCalendarVisible, setCalendarVisibility] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState({ from: dateFrom, to: dateTo });

  const { from, to } = selectedDateRange;

  const getDateFrom = (): string => {
    const dateOptions: { day: string; month: string } = {
      day: 'numeric',
      month: 'short',
    };

    const selectedDateFrom: string = from.toLocaleDateString('ru-RU', dateOptions).replace('.', '');
    let selectedDateTo: string;

    if (to) {
      selectedDateTo = to.toLocaleDateString('ru-RU', dateOptions).replace('.', '');
    }

    return type === 'single'
      ? `${`${selectedDateFrom}`} ${to ? `- ${selectedDateTo}` : ''}`
      : from.toLocaleDateString('ru-RU');
  };

  const getMaskedDate = (): string => (type === 'single' ? 'Выберите дату' : 'ДД.ММ.ГГГГ');

  const openCalendar = (): void => {
    setCalendarVisibility(true);
  };

  const closeCalendar = (): void => {
    setCalendarVisibility(false);
  };

  return (
    <S.Container>
      <Field
        name={name}
        render={({ input }) => {
          const applyCalendar = (): void => {
            input.onChange({
              from: selectedDateRange.from ? selectedDateRange.from.getTime() : '',
              to: selectedDateRange.to ? selectedDateRange.to.getTime() : '',
            });
            closeCalendar();
          };
          return (
            <>
              <S.ContainerElement type={type} onClick={disabled ? undefined : openCalendar}>
                <Input
                  value={from ? getDateFrom() : getMaskedDate()}
                  label={dateFromLabelText}
                  placeholder="date from"
                  readOnly
                />
                <S.ExpandIcon />
              </S.ContainerElement>
              {type === 'double' && (
                <S.ContainerElement onClick={disabled ? undefined : openCalendar}>
                  <Input
                    value={to ? to.toLocaleDateString('ru-RU') : getMaskedDate()}
                    label={dateToLabelText}
                    placeholder="date to"
                    readOnly
                  />
                  <S.ExpandIcon />
                </S.ContainerElement>
              )}
              <Calendar
                isVisible={isCalendarVisible}
                onChangeVisible={setCalendarVisibility}
                onSelectDate={setSelectedDateRange}
                onApply={applyCalendar}
                onClose={closeCalendar}
              />
            </>
          );
        }}
      />
    </S.Container>
  );
};

export default TimePicker;
