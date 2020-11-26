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
  { icon: 'insert_emoticon', term: 'Comfort', definition: 'Sound absorbing walls' },
  { icon: 'location_city', term: 'Convenience', definition: 'Window in each of the bedrooms' },
  { icon: 'whatshot', term: 'Cosiness', definition: 'The room is equipped with a fireplace' },
];

const rulesData: Required<string[]> = [
  'Not allowed with pets',
  'No parties and events',
  'Arrival time - after 1 00 PM, and departure before 12 00 AM',
];

export { roomImagesPreview, benefitsData, rulesData };
