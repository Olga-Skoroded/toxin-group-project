type RoomImagesPreview = {
  src: string;
  alt: string;
};

type BenefitsData = {
  icon: string;
  term: string;
  definition: string;
};

const roomImagesPreview: Required<RoomImagesPreview[]> = [
  {
    src: '/img/room-image-preview-1.jpg',
    alt: 'Представление номера',
  },
  {
    src: '/img/room-image-preview-2.jpg',
    alt: 'Представление номера',
  },
  {
    src: '/img/room-image-preview-3.jpg',
    alt: 'Представление номера',
  },
];

const benefitsData: Required<BenefitsData[]> = [
  { icon: 'insert_emoticon', term: 'Комфорт', definition: 'Шумопоглощающие стены' },
  { icon: 'location_city', term: 'Удобство', definition: 'Окно в каждой из спален' },
  { icon: 'whatshot', term: 'Уют', definition: 'Номер оснащён камином' },
];

const rulesData: Required<string[]> = [
  'Нельзя с питомцами',
  'Без вечеринок и мероприятий',
  'Время прибытия — после 13:00, а выезд до 12:00',
];

export { roomImagesPreview, benefitsData, rulesData };
