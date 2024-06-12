import images from './images';

const drinks = [
  {
    title: 'Gourmet Cola',
    price: '$3',
    tags: 'AU | Bottle',
  },
  {
    title: 'Cola Next',
    price: '$2',
    tags: 'AU | Bottle',
  },
  {
    title: 'Sprite Next',
    price: '$4',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Big Apple',
    price: '$3',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Big Lychee',
    price: '$6',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Pinnacolada',
    price: '$10',
    tags: 'Aperol | PineApple | soda | 30 ml',
  },
  {
    title: "Mint Margarita",
    price: '$6',
    tags: 'Mint | Sprite Next | Slice of lime',
  },
  {
    title: 'Beet-Sumac',
    price: '$10',
    tags: 'Beet Juice | Citrus juice | Sugar',
  },
  {
    title: 'Tonic Mocktail',
    price: '$13',
    tags: 'Tonic | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Chai Blossom',
    price: '$6',
    tags: 'Tea | Citrus juice | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { drinks, cocktails, awards };
