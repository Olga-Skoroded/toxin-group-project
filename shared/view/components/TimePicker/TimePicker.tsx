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

    const formatter = new Intl.DateTimeFormat(i18n.language);

    const getDateFrom = (): string => {
      const selectedDateFrom = formatter.format(from);
      const selectedDateTo = to ? formatter.format(to) : '';

      return type === 'single'
        ? `${`${selectedDateFrom}`} ${to ? `- ${selectedDateTo}` : ''}`
        : selectedDateFrom;
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
                from: selectedDateRange.from,
                to: selectedDateRange.to,
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
                      value={to ? formatter.format(to) : getMaskedDate()}
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
