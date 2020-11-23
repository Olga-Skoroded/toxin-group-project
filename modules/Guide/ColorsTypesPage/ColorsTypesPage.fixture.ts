import { UIColor, UIType } from './ColorsTypesPage.model';

export const colors: Required<UIColor[]> = [
  {
    title: 'Dark Shade 100%',
    color: '#1F2041',
    opacity: 1,
  },
  {
    title: 'Dark Shade 75%',
    color: '#1F2041',
    opacity: 0.75,
  },
  {
    title: 'Dark Shade 50%',
    color: '#1F2041',
    opacity: 0.5,
  },
  {
    title: 'Dark Shade 25%',
    color: '#1F2041',
    opacity: 0.25,
  },
  {
    title: 'Dark Shade 5%',
    color: '#1F2041',
    opacity: 0.05,
  },
  {
    title: 'Purple',
    color: '#BC9CFF',
    opacity: 1,
  },
  {
    title: 'Green',
    color: '#6FCF97',
    opacity: 1,
  },
];

export const types: Required<UIType[]> = [
  {
    type: 'H1',
    example: 'This one is the sub-section or widget title',
    fontSize: '24px',
  },
  {
    type: 'H2',
    example: 'Next one is the item title inside widgets',
    fontSize: '19px',
  },
  {
    type: 'H3',
    example: 'This is a label or CTA text',
    fontSize: '12px',
  },
  {
    type: 'Body',
    example:
      'This is the body text which is used for most of the design, like paragraphs, lists, etc.',
    fontSize: '14px',
  },
];
