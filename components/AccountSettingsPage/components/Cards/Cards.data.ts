type CardsData = {
  title: string;
  description: string;
  href: string;
};

const cardsData: CardsData[] = [
  {
    title: 'Личная информация',
    description: 'Предоставьте личные и контактные данные',
    href: '/account-settings/personal-info',
  },
  {
    title: 'Вход и безопасность',
    description: 'Обновите пароль и обеспечьте безопасность аккаунта',
    href: './account-settings/login-and-security',
  },
  {
    title: 'Уведомления',
    description: 'Выберите настройки уведомлений и способы связи',
    href: './account-settings/notifications',
  },
  {
    title: 'Забронированные номера',
    description: 'Просмотрите все номера которые были забронированы вами',
    href: './account-settings',
  },
];

export { cardsData };
