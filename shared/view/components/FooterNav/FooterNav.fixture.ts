import { NavProps } from './FooterNav.model';

const footerNavData: Required<NavProps> = {
  items: [
    {
      title: 'Navigation',
      items: [
        {
          href: '/about-us',
          text: 'About Us',
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
          href: '/services',
          text: 'Services',
        },
      ],
    },
    {
      title: 'About Us',
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
          href: '/contact-us',
          text: 'Contact Us',
        },
      ],
    },
  ],
};

export { footerNavData };
