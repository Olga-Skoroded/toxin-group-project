type CardsData = {
  title: string;
  description: string;
  href: string;
};

const cardsData: CardsData[] = [
  {
    title: 'Personal info',
    description: 'Provide personal details and how we can reach you',
    href: '/profile/personal-info',
  },
  {
    title: 'Login & security',
    description: 'Update your password and secure your account',
    href: './profile/login-and-security',
  },
  {
    title: 'Notifications',
    description: 'Choose notification preferences and how you want to be contacted',
    href: './profile/notifications',
  },
  {
    title: 'Booked rooms',
    description: 'View all rooms that have been booked by you',
    href: './profile/selected-rooms',
  },
];

export { cardsData };
