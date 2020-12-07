import { NavMenuLink } from './NavMenu.model';

const NavLinks: NavMenuLink[] = [
  { name: 'About Us', path: '/about-us' },
  {
    name: 'Services',
    path: '/services',
    subMenu: [
      { name: 'Transfer', path: '/services/transfer' },
      { name: 'Food Order', path: '/services/menu' },
    ],
  },
  { name: 'Careers', path: '/mock-Careers' },
  { name: 'News', path: '/mock-news' },
  {
    name: 'Agreements',
    path: '/mock-agreements',
    subMenu: [{ name: 'Прайс лист', path: '/rooms/price-list' }],
  },
];

export { NavLinks };
