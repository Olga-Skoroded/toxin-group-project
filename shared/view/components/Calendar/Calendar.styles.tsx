import DayPicker, { DayPickerProps } from 'react-day-picker';
import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

type Control = {
  variant: 'primary' | 'basic';
};

type CalendarContainer = {
  isVisible?: boolean;
};

const CalendarContainer = styled.div<CalendarContainer>`
  ${(props) => {
    const { colors } = props.theme;
    const { isVisible } = props;

    return css`
      display: ${isVisible ? 'block' : 'none'};
      position: absolute;
      top: 5rem;
      left: 50%;
      transform: translateX(-50%);
      max-width: 22.9rem;
      width: 100%;
      border: 0.1rem solid ${colors.basicLight};
      border-radius: 0.3rem;
      padding: 0 1.2rem;
      z-index: 1000;
      background: ${colors.defaultBackground};
      box-shadow: 0 0 2rem ${colors.basicLight};
    `;
  }}
`;

const CalendarControls = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
`;

const CalendarButton = styled.button<Control>`
  ${(props) => {
    const { colors, typography } = props.theme;
    const { variant } = props;

    return css`
      border: none;
      outline: none;
      background: inherit;
      font-family: ${typography.fontName};
      font-size: 0.8571rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      color: ${variant === 'basic' ? colors.basicDark : colors.primary};
    `;
  }}
`;

const Calendar = styled(DayPicker)<DayPickerProps>`
  ${(props) => {
    const { colors, typography, gradients } = props.theme;

    return css`
      & .DayPicker-wrapper {
        &:focus {
          outline: none;
        }
      }

      & .DayPicker-Day {
        padding-top: calc(50% - 0.5357rem);
        padding-bottom: calc(50% - 0.5357rem);
        font-family: ${typography.fontName};
        font-size: 0.8571rem;
        text-align: center;
        color: ${colors.basicDark};
        cursor: pointer;

        &--outside,
        &--disabled {
          color: ${colors.basicLight};
        }

        &--today {
          background: ${gradients.secondary};
          color: ${colors.defaultBackground};
          font-weight: bold;

          :not(.DayPicker-Day--selected) {
            border-radius: 50%;
          }
        }

        &--selected {
          background: ${gradients.secondaryLighten};
          :not(.DayPicker-Day--today):not(.DayPicker-Day--start):not(.DayPicker-Day--end) {
            color: ${colors.basic};
          }
        }

        &--start,
        &--end {
          color: ${colors.defaultBackground};
          font-weight: bold;
          outline: none;
          position: relative;
          background: ${gradients.primary};
          border-radius: 50%;
          opacity: 1;

          &:after {
            content: '';
            display: block;
            width: 50%;
            height: 100%;
            position: absolute;
            background: ${gradients.primary};
            top: 0;
            right: 0;
            z-index: -1;
            opacity: 0.25;
          }
        }

        &--end:after {
          left: 0;
        }

        &:not(.DayPicker-Day--start) :not(.DayPicker-Day--end) :not(.DayPicker-Day--today) :hover {
          background: ${colors.basicLightest};
        }

        &:hover:not(.DayPicker-Day--selected) {
          border-radius: 50%;
        }

        &:focus {
          outline: none;
        }
      }

      & .DayPicker-Day--selected {
        &.DayPicker-Day--today {
          position: relative;

          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            background: ${gradients.secondary};
            opacity: 1;
            top: 0;
            right: 0;
            z-index: -1;
          }
        }
      }

      & .DayPicker-Day--start.DayPicker-Day--today:after,
      & .DayPicker-Day--end.DayPicker-Day--today:after {
        opacity: 0.25;
        width: 50%;
      }

      & .DayPicker {
        &-Caption {
          ${titles.h2()};
          text-align: center;
          margin-top: 1.6rem;
        }

        &-Weekdays {
          margin: 2.8rem 0rem 0.8rem 0;
        }

        &-Weekday {
          width: 10rem;
          text-align: center;

          & > Abbr {
            text-decoration: none;
            font-weight: bold;
            font-family: ${typography.fontName};
            font-size: 0.8rem;
          }
        }

        &-Week {
          display: grid;
          grid-template-columns: repeat(7, minmax(2.428rem, 2.857rem));
        }

        &-WeekdaysRow {
          display: flex;
          justify-content: space-between;
          color: ${colors.primary};
        }
      }
    `;
  }};
`;

export { CalendarContainer, CalendarControls, CalendarButton, Calendar };
