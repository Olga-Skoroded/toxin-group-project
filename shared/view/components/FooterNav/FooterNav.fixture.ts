import { NavProps } from './FooterNav.model';

const footerNavData: Required<NavProps> = {
  items: [
    {
      title: 'Navigation',
      items: [
        {
          href: '/mock',
          text: 'About us',
        },
        {
          href: '/mock',
          text: 'News',
        },
        {
          href: '/mock',
          text: 'Support',
        },
        {
          href: '/mock',
          text: 'Services',
        },
      ],
    },
    {
      title: 'About us',
      items: [
        {
          href: '/mock',
          text: 'About service',
        },
        {
          href: '/mock',
          text: 'Our team',
        },
        {
          href: '/mock',
          text: 'Careers',
        },
        {
          href: '/mock',
          text: 'Investors',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          href: '/mock',
          text: 'Agreements',
        },
        {
          href: '/mock',
          text: 'Communities',
        },
        {
          href: '/mock',
          text: 'Contact us',
        },
      ],
    },
  ],
};

export { footerNavData };
