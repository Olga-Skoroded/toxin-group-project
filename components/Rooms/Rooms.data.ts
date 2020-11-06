import { Props as RoomProps } from '../Room/Room.types';

const rooms: RoomProps[] = [
  {
    number: 888,
    price: 9900,
    reviews: [],
    roomType: 'люкс',
    rating: 5,
    imagePaths: ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 840,
    price: 9900,
    reviews: [],
    rating: 4,
    imagePaths: ['/img/2.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 980,
    price: 8500,
    reviews: [],
    rating: 3,
    imagePaths: ['/img/3.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 856,
    price: 7300,
    reviews: [],
    rating: 5,
    imagePaths: ['/img/4.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 740,
    price: 6000,
    reviews: [],
    rating: 4,
    imagePaths: ['/img/5.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 982,
    price: 5800,
    reviews: [],
    rating: 3,
    imagePaths: ['/img/6.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 678,
    price: 5500,
    reviews: [],
    rating: 5,
    imagePaths: ['/img/7.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 450,
    price: 5300,
    reviews: [],
    rating: 4,
    imagePaths: ['/img/8.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 350,
    price: 5000,
    reviews: [],
    rating: 3,
    imagePaths: ['/img/9.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 666,
    price: 5000,
    reviews: [],
    rating: 5,
    imagePaths: ['/img/10.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 444,
    price: 5000,
    reviews: [],
    rating: 3,
    imagePaths: ['/img/11.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
  {
    number: 352,
    price: 5000,
    reviews: [],
    rating: 3,
    imagePaths: ['/img/12.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
  },
];

export default Promise.resolve([
  ...rooms,
  ...rooms.map((el) => ({ ...el, number: el.number * 10 })),
  ...rooms.map((el) => ({ ...el, number: el.number * 100 })),
]);
