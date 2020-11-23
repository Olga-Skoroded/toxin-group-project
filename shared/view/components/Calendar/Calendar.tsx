import { useState, useEffect, useRef, memo } from 'react';
import { DateUtils, DayModifiers } from 'react-day-picker';
import { useTranslation } from 'react-i18next';

import { TextButton } from 'shared/view/elements';

import * as S from './Calendar.styles';
import { NavBar } from './components/NavBar/NavBar';

type SelectedDate = null | Date;

type DaysSelection = {
  from: SelectedDate;
  to: SelectedDate;
  enteredTo?: SelectedDate;
};

type Props = {
  onChangeVisible: (isVisible: boolean) => void;
  onApply?: (...args: unknown[]) => unknown;
  onSelectDate?: (data: DaysSelection) => void;
  onClose?: () => void;
} & S.CalendarContainer;

const Calendar = memo(
  ({ onChangeVisible, onApply, onClose, onSelectDate, isVisible = false }: Props) => {
    const [selectedDays, handleSelectDays] = useState<DaysSelection>({
      from: null,
      to: null,
      enteredTo: null,
    });
    const htmlContainer = useRef(null);
    const { t, i18n } = useTranslation(['Months', 'WeekdaysShort', 'Buttons']);

    useEffect(() => {
      const handleDocumentClick = (e: Event) => {
        if (isVisible && !htmlContainer.current.contains(e.target)) {
          onChangeVisible(false);
          if (onClose) onClose();
        }
      };

      document.addEventListener('click', handleDocumentClick);
      return () => document.removeEventListener('click', handleDocumentClick);
    }, [isVisible, onChangeVisible, onClose]);

    const applySelectingDays = (newRange: DaysSelection) => {
      handleSelectDays(newRange);
      if (onSelectDate) onSelectDate(newRange);
    };

    const handleDayClick = (day: SelectedDate, modifiers: DayModifiers): void => {
      if (modifiers.disabled) return;

      const range: DaysSelection = DateUtils.addDayToRange(day, selectedDays);

      applySelectingDays(range);
    };

    const handleApplyButtonClick = (): void => {
      onChangeVisible(false);

      if (onApply) onApply();
    };

    const clearSelectedDate = (): void => {
      const clearedData = { from: undefined, to: undefined };

      applySelectingDays(clearedData);
    };

    const { from, to } = selectedDays;
    const modifiers = { start: from, end: selectedDays.to };

    const months = [
      t('Months:January'),
      t('Months:February'),
      t('Months:March'),
      t('Months:April'),
      t('Months:May'),
      t('Months:June'),
      t('Months:July'),
      t('Months:August'),
      t('Months:September'),
      t('Months:October'),
      t('Months:November'),
      t('Months:December'),
    ];

    const weekdaysLong = [
      t('WeekdaysLong:Sunday'),
      t('WeekdaysLong:Monday'),
      t('WeekdaysLong:Tuesday'),
      t('WeekdaysLong:Wednesday'),
      t('WeekdaysLong:Thursday'),
      t('WeekdaysLong:Friday'),
      t('WeekdaysLong:Saturday'),
    ];

    const weekdaysShort = [
      t('WeekdaysShort:Su'),
      t('WeekdaysShort:Mo'),
      t('WeekdaysShort:To'),
      t('WeekdaysShort:We'),
      t('WeekdaysShort:Th'),
      t('WeekdaysShort:Fr'),
      t('WeekdaysShort:Sa'),
    ];

    return (
      <S.CalendarContainer isVisible={isVisible} ref={htmlContainer}>
        <S.Calendar
          showOutsideDays
          modifiers={modifiers}
          locale={i18n.language}
          months={months}
          weekdaysLong={weekdaysLong}
          weekdaysShort={weekdaysShort}
          firstDayOfWeek={1}
          selectedDays={[from, { from, to }]}
          disabledDays={{ before: new Date() }}
          onDayClick={handleDayClick}
          navbarElement={<NavBar />}
        />
        <S.CalendarControls>
          <TextButton type="button" isSecondary onClick={clearSelectedDate}>
            {t('Buttons:Clear')}
          </TextButton>
          <TextButton type="button" onClick={handleApplyButtonClick}>
            {t('Buttons:Apply')}
          </TextButton>
        </S.CalendarControls>
      </S.CalendarContainer>
    );
  },
);

export { Calendar };
