import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles } from 'shared/styles/mixins';

const RoomImpression = styled.section``;

const Title = styled.h2`
  margin: 0 0 1.4285rem 0;
  ${titles.h2}
  font-size: 1.3571rem;

  @media ${breakpointDown('xs')} {
    text-align: center;
  }
`;

const Figure = styled.figure`
  display: flex;
  align-items: flex-end;

  @media ${breakpointDown('xs')} {
    flex-direction: column;
    align-items: center;
  }
`;

const PieChartWrapper = styled.div`
  position: relative;
  width: 8.5714rem;
  height: 8.5714rem;

  @media ${breakpointDown('xs')} {
    margin-bottom: 1.5rem;
  }
`;

const ReviewsCounter = styled.p`
  ${(props) => {
    const { colors, typography } = props.theme;

    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -54%);
      display: flex;
      flex-direction: column;
      text-align: center;
      font: bold 1.714rem ${typography.secondaryFontName};
      color: ${colors.primary};
    `;
  }}
`;

const ReviewsCounterText = styled.span`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      font: normal normal 0.857rem ${typography.fontName};
      text-transform: uppercase;
    `;
  }}
`;

const FigureCaption = styled.figcaption``;

const List = styled.ul`
  margin: 0;
  padding-left: 3.214rem;
  list-style: none;

  @media ${breakpointDown('xs')} {
    padding: 0;
  }
`;

const Item = styled.li`
  ${(props) => {
    const { typography, gradients } = props.theme;

    return css`
      position: relative;
      line-height: ${typography.lineHeight};

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -1.0714rem;
        width: 0.71428rem;
        height: 0.71428rem;
        border-radius: 50%;
        background: linear-gradient(180deg, #919191 0%, #3d4975 100%);
      }

      &:first-child:before {
        background: linear-gradient(180deg, #ffe39c 0%, #ffba9c 100%);
      }

      &:nth-child(2):before {
        background: ${gradients.primary};
      }

      &:nth-child(3):before {
        background: ${gradients.secondary};
      }
    `;
  }}
`;

export {
  RoomImpression,
  Title,
  Figure,
  PieChartWrapper,
  ReviewsCounter,
  ReviewsCounterText,
  FigureCaption,
  List,
  Item,
};
