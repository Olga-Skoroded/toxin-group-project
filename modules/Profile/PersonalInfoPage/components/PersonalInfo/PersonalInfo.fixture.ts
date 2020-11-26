type Data = {
  title: string;
  component: string;
  description?: string;
};

const data: Required<Data[]> = [
  {
    title: 'Legal name',
    component: 'displayName',
    description:
      'This is the name on your travel document, which could be a license or a passport.',
  },
  {
    title: 'Gender',
    component: 'gender',
  },
  {
    title: 'Date of birth',
    component: 'birthday',
  },
  {
    title: 'Email address',
    component: 'email',
    description: 'Use an address you’ll always have access to.',
  },
];

export { data };
