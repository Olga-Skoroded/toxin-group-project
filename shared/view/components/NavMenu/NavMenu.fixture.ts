import { NavMenuLink } from './NavMenu.model';

const NavLinks: NavMenuLink[] = [
  { name: 'About Us', path: '/about-us' },
  {
    name: 'Services',
    path: '/services',
    subMenu: [
      { name: 'Transfer', path: '/services/transfer' },
      { name: 'Food order', path: '/services/food-order' },
    ],
  },
  { name: 'Careers', path: '/mock-Careers' },
  { name: 'News', path: '/mock-news' },
  {
    name: 'Agreements',
    path: '/mock-agreements',
    subMenu: [
      { name: 'sub-соглашения-one', path: '/mock-sub-agreements-one' },
      { name: 'sub-соглашения-two', path: '/mock-sub-agreements-two' },
      { name: 'sub-соглашения-three', path: '/mock-sub-agreements-three' },
    ],
  },
];

export { NavLinks };
