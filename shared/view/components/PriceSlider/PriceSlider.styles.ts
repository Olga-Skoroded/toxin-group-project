import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

type DescriptionProps = {
  title: string;
};

const Description = styled.div<DescriptionProps>`
  ${(props) => {
    const { title } = props;
    return css`
      display: flex;
      align-items: center;
      justify-content: ${title ? 'space-between' : 'flex-end'};
      margin-bottom: 0.7143rem;
    `;
  }}
`;

const Title = styled.h3`
  ${titles.h3}
`;

const Value = styled.span`
  font-size: 0.8571rem;
`;

export { Description, Title, Value };
