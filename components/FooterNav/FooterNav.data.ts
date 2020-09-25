import { NavProps } from './FooterNav.types';

const data: Required<NavProps> = {
  items: [
    {
      title: 'навигация',
      items: [
        {
          href: '/mock',
          text: 'О нас',
        },
        {
          href: '/mock',
          text: 'Новости',
        },
        {
          href: '/mock',
          text: 'Служба поддержки',
        },
        {
          href: '/mock',
          text: 'Услуги',
        },
      ],
    },
    {
      title: 'о нас',
      items: [
        {
          href: '/mock',
          text: 'О сервисе',
        },
        {
          href: '/mock',
          text: 'Наша команда',
        },
        {
          href: '/mock',
          text: 'Вакансии',
        },
        {
          href: '/mock',
          text: 'Инвесторы',
        },
      ],
    },
    {
      title: 'Служба поддержки',
      items: [
        {
          href: '/mock',
          text: 'Соглашения',
        },
        {
          href: '/mock',
          text: 'Сообщества',
        },
        {
          href: '/mock',
          text: 'Связь с нами',
        },
      ],
    },
  ],
};

export default data;