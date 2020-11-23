import styled, { css } from 'styled-components';

import { titles, visuallyHidden } from 'shared/styles/mixins';

const Container = styled.section`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      max-width: 27.1429rem;
      background: ${colors.defaultBackground};
      padding: 2.75rem 2rem 2rem 2.05rem;
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      border-radius: 0.2857rem;

      @media (max-width: 460px) {
        padding: 1rem;
      }
    `;
  }}
`;

const Title = styled.h2`
  ${visuallyHidden}
`;

const RoomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const RoomNumber = styled.h3`
  ${titles.h2}
  font-size: 1.7143rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin: 0 0.7143rem 1.4286rem 0;
`;

const RoomType = styled.span`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      word-break: break-all;
      ${titles.h3({ color: colors.primary })}
      margin-left: 0.3571rem;
    `;
  }}
`;

const NumberSign = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      font: 700 1rem ${typography.fontName};
      margin-right: 0.3571rem;
    `;
  }}
`;

const Price = styled.span`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      font: 700 1rem ${typography.fontName};
      color: ${colors.basic};
      text-align: right;
    `;
  }}
`;

const Measure = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      margin-left: 0.3571rem;
      font: 400 0.8571rem ${typography.fontName};
    `;
  }}
`;

const Datepicker = styled.div`
  margin-bottom: 1.4286rem;
`;

const DropdownLabel = styled.div`
  ${titles.h3}
`;

const Dropdown = styled.div`
  margin-bottom: 1.4286rem;
`;

const PriceList = styled.div`
  margin-bottom: 2.1429rem;
`;

const ResultPrice = styled.div``;
const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  gap: 0 0.3571rem;
  ${titles.h2()}
  margin-bottom: 1.4286rem;
`;

const Dots = styled.div`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      margin-bottom: 0.4286rem;
      border-bottom: 0.0714rem dotted ${colors.basicLight};
    `;
  }}
`;

export {
  Container,
  RoomNumber,
  RoomType,
  NumberSign,
  Price,
  Measure,
  Datepicker,
  Title,
  RoomInfo,
  Dropdown,
  DropdownLabel,
  PriceList,
  ResultWrapper,
  Dots,
  ResultPrice,
};
