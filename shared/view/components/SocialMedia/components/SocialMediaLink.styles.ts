import { AnchorHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { fontAwesome, fontAwesomeIcons, visuallyHidden } from 'shared/styles/mixins';

import { SocialMediaItem } from '../SocialMedia.model';

type LinkProps = SocialMediaItem & AnchorHTMLAttributes<HTMLAnchorElement>;

const Label = styled.span`
  ${visuallyHidden}
`;

const Link = styled.a<LinkProps>`
  ${(props) => {
    const { gradients } = props.theme;
    const { icon } = props;
    return css`
      display: inline-block;
      ${fontAwesome}
      background-image: ${gradients.primary};
      text-decoration: none;

      &::before {
        content: '${fontAwesomeIcons[icon]}';
        font-size: 1.7143rem;
      }

      &:hover {
        background-image: ${gradients.primaryLight};
      }
    `;
  }}
`;

export { Label, Link };
