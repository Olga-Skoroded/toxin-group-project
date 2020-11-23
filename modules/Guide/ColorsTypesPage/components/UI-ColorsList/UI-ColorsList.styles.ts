import styled from 'styled-components';

import { visuallyHidden } from 'shared/styles/mixins';

const Title = styled.h2`
  ${visuallyHidden}
`;

const List = styled.ul`
  list-style-type: none;

  li + li {
    margin-top: 1.428rem;
  }
`;

export { Title, List };
