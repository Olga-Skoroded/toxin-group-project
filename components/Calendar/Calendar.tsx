import React, { useState, useEffect, useRef } from 'react';
import { DateUtils } from 'react-day-picker';

import TextButton from 'components/TextButton/TextButton';
import { months, weekdaysShort } from 'shared/helpers/validators';

import * as S from './Calendar.styles';
import NavBar from './components/NavBar/NavBar';

type SelectedDate = null | Date;

type DaysSelection = {
  from: SelectedDate;
  to: SelectedDate;
  enteredTo?: SelectedDate;
};

type Calendar = {
  onApply?: (...args: unknown[]) => unknown;
  onSelectDate?: (data: DaysSelection) => void;
  onClose?: () => void;
} & S.CalendarContainer;

const Calendar: React.FC<Calendar> = (props: Calendar) => {
  const has = Object.prototype.hasOwnProperty;
  const { onApply, onClose, onSelectDate, isVisible } = props;
  const [selectedDays, handleSelectDays] = useState<DaysSelection>({
    from: null,
    to: null,
    enteredTo: null,
  });
  const [isShown, setVisibility] = useState(isVisible);
  const htmlContainer = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e: Event) => {
      if (isShown && !htmlContainer.current.contains(e.target)) {
        setVisibility(false);
        if (has.call(props, 'onClose')) onClose();
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [has, isShown, onClose, props]);

  const applySelectingDays = (newRange: DaysSelection) => {
    handleSelectDays(newRange);
    if (has.call(props, 'onSelectDate')) onSelectDate(newRange);
  };

  const handleDayClick = (day: SelectedDate): void => {
    const range: DaysSelection = DateUtils.addDayToRange(day, selectedDays);

    applySelectingDays(range);
  };

  const handleApplyButtonClick = (e: React.MouseEvent): void => {
    e.preventDefault();

    setVisibility(false);

    if (has.call(props, 'onApply')) onApply();
  };

  const clearSelectedDate = (e: React.MouseEvent): void => {
    e.preventDefault();

    const clearedData = {
      from: undefined,
      to: undefined,
    };

    applySelectingDays(clearedData);
  };

  const { from, to } = selectedDays;
  const modifiers = { start: from, end: selectedDays.to };

  return (
    <S.CalendarContainer isVisible={isShown} ref={htmlContainer}>
      <S.Calendar
        modifiers={modifiers}
        months={months}
        weekdaysShort={weekdaysShort}
        selectedDays={[from, { from, to }]}
        onDayClick={handleDayClick}
        navbarElement={<NavBar />}
      />
      <S.CalendarControls>
        <TextButton isLink={false} isSecondary onClick={clearSelectedDate}>
          Очистить
        </TextButton>
        <TextButton isLink={false} onClick={handleApplyButtonClick}>
          Применить
        </TextButton>
      </S.CalendarControls>
    </S.CalendarContainer>
  );
};

export default Calendar;
