import { FoodData } from 'services/api/entities/model';

type FoodCategories = {
  [key: string]: string;
};

const foodData: FoodData = {
  snacks: {
    'Tasty tortilla': {
      grams: 300,
      price: 380,
      description: 'Wheat tortilla, chicken fillet, cheddar cheese, legendary sauce',
      image: '/img/food/tasty-tortilla.jpeg',
    },
    'Croissant with salmon': {
      grams: 280,
      price: 350,
      description: 'Croissant, lightly salted salmon, avocado',
      image: '/img/food/croissant-with-salmon.jpeg',
    },
    'Tortilla roll with chicken': {
      grams: 200,
      price: 350,
      description:
        'Cheese tortilla, iceberg lettuce, salted gherkin, fresh tomato, chicken fillet, Caesar sauce, mozzarella cheese',
      image: '/img/food/tortilla-roll-with-chicken.jpeg',
    },
    'Tortilla roll with salmon': {
      grams: 300,
      price: 380,
      description:
        'Cheese tortilla, iceberg lettuce, fresh cucumber, fresh tomato, salted salmon, Caesar sauce, mozzarella cheese',
      image: '/img/food/tortilla-roll-with-salmon.jpeg',
    },
  },
  'hot-dishes': {
    'Beef stroganoff': {
      grams: 300,
      price: 550,
      description: 'Beef, cream, mushrooms, pepper',
      image: '/img/food/beef-stroganoff.jpeg',
    },
    'Homemade dumplings with sour cream': {
      grams: 350,
      price: 320,
      description: 'Flour, beef',
      image: '/img/food/homemade-dumplings-with-sour-cream.jpeg',
    },
    'Salmon steak': {
      grams: 190,
      price: 550,
      description: 'Choice of cooking method',
      image: '/img/food/salmon-steak.jpeg',
    },
    'Homemade chicken cutlets': {
      grams: 100,
      price: 290,
      description: 'Chicken fillet, onion (optional cooking method)',
      image: '/img/food/homemade-chicken-cutlets.jpeg',
    },
    'Tender chicken fillet': {
      grams: 180,
      price: 340,
      description: 'Choice of cooking method',
      image: '/img/food/tender-chicken-fillet.jpeg',
    },
  },
  soups: {
    'Tom yum soup with shrimp': {
      grams: 340,
      price: 420,
      description: 'Tom yum pasta, coconut milk, shrimp',
      image: '/img/food/tom-yum-soup-with-shrimp.jpeg',
    },
    'Andalusian Gazpacho soup': {
      grams: 340,
      price: 320,
      description: 'Tomato, cucumber, celery, salt, pepper',
      image: '/img/food/andalusian-gazpacho-soup.jpeg',
    },
    'Delicate pumpkin cream soup': {
      grams: 350,
      price: 350,
      description: 'Pumpkin, water, sesame seeds, pumpkin seeds',
      image: '/img/food/delicate-pumpkin-cream-soup.jpeg',
    },
    'Chicken soup with homemade noodles': {
      grams: 350,
      price: 350,
      description: 'Chicken broth, chicken fillet, onion, carrot, egg noodles',
      image: '/img/food/chicken-soup-with-homemade-noodles.jpeg',
    },
    'Borscht with beef and homemade sour cream': {
      grams: 350,
      price: 320,
      description:
        'Beef broth, potatoes, cabbage, beets, carrots, onions, tomato, beef, sour cream',
      image: '/img/food/borscht-with-beef-and-homemade-sour-cream.jpeg',
    },
  },
};

const foodCategories: FoodCategories = {
  snacks: 'Snacks',
  'hot-dishes': 'Hot dishes',
  soups: 'Soups',
};

export { foodData, foodCategories };
