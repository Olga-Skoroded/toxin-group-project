import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Room = styled.div`
  width: 100%;
  max-width: 19.2857rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.1);
  border-radius: 0.2857rem;
  overflow: hidden;
`;

const Info = styled.a`
  cursor: pointer;
  outline: none;
  padding: 1.4286rem;
  text-decoration: none;
`;

const Container = styled.div`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.5714rem;
      border-bottom: 0.0714rem solid ${colors.basicPale};
      margin-bottom: 0.4286rem;
    `;
  }}
`;

const RoomNumber = styled.h3`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      ${titles.h2}
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;

      ${Info}:hover &,
      ${Info}:focus & {
        color: ${colors.basicLight};
      }
    `;
  }}
`;

const RoomType = styled.span`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      word-break: break-all;
      ${titles.h3({ color: colors.primary })}
      margin-right: 0.7143rem;
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

const Reviews = styled.span`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      font: 700 1rem ${typography.fontName};
      color: ${colors.basic};
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

const RatingContainer = styled(Container)`
  border-bottom: 0;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const ReviewCount = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      font: 700 1rem ${typography.fontName};
    `;
  }}
`;

const ReviewMeasure = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      display: inline-block;
      margin-left: 0.3571rem;
      font: 400 0.8571rem ${typography.fontName};
      text-transform: capitalize;
    `;
  }}
`;

export {
  Room,
  Info,
  RoomNumber,
  RoomType,
  NumberSign,
  Price,
  Reviews,
  Measure,
  Container,
  RatingContainer,
  ReviewCount,
  ReviewMeasure,
};
