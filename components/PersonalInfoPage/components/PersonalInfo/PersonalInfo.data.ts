type Data = {
  title: string;
  component: string;
  description?: string;
};

const data: Required<Data[]> = [
  {
    title: 'Имя по документам',
    component: 'displayName',
    description:
      'Имя, указанное в загранпаспорте, водительском удостоверении или другом выездном документе.',
  },
  {
    title: 'Пол',
    component: 'gender',
  },
  {
    title: 'Дата рождения',
    component: 'birthday',
  },
  {
    title: 'Электронный адрес',
    component: 'email',
    description: 'Укажите адрес, к которому у вас есть постоянный доступ.',
  },
];

export { data };
