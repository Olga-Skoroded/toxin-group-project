import { ChangeEvent, memo, useState } from 'react';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { Calendar } from 'shared/view/components';
import { Input } from 'shared/view/elements';

import * as S from './TimePicker.styles';

type Props = {
  name: string;
  dateFrom?: Date;
  dateTo?: Date;
  dateFromLabelText?: string;
  dateToLabelText?: string;
  onChange?: (e: ChangeEvent) => void;
} & S.ContainerElement;

const TimePicker = memo(
  ({ type, dateFrom, dateTo, name, dateFromLabelText, dateToLabelText }: Props) => {
    const [isCalendarVisible, setCalendarVisibility] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState({ from: dateFrom, to: dateTo });
    const { t, i18n } = useTranslation(['TimePicker', 'Shared']);

    const { from, to } = selectedDateRange;

    const getDateFrom = (): string => {
      const dateOptions: { day: string; month: string } = {
        day: 'numeric',
        month: 'short',
      };

      const selectedDateFrom: string = from
        .toLocaleDateString(i18n.language, dateOptions)
        .replace('.', '');
      let selectedDateTo: string;

      if (to) {
        selectedDateTo = to.toLocaleDateString(i18n.language, dateOptions).replace('.', '');
      }

      return type === 'single'
        ? `${`${selectedDateFrom}`} ${to ? `- ${selectedDateTo}` : ''}`
        : from.toLocaleDateString(i18n.language);
    };

    const getMaskedDate = (): string =>
      type === 'single' ? t('TimePicker:Select Date') : t('Shared:Date mask');

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
                <S.ContainerElement type={type} onClick={openCalendar}>
                  <Input
                    value={from ? getDateFrom() : getMaskedDate()}
                    label={dateFromLabelText}
                    placeholder="date from"
                    readOnly
                  />
                  <S.ExpandIcon />
                </S.ContainerElement>
                {type === 'double' && (
                  <S.ContainerElement onClick={openCalendar}>
                    <Input
                      value={to ? to.toLocaleDateString(i18n.language) : getMaskedDate()}
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
  },
);

export { TimePicker };
