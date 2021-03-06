import { reduce } from 'ramda';

export const CART_ENDPOINT = 'https://tech-test-shopping-cart.herokuapp.com/cart';

export const APPLE = 'apple';
export const ORANGE = 'orange';
export const GARLIC = 'garlic';
export const PAPAYA = 'papaya';

export const VALID_ITEMS = [ APPLE, ORANGE, GARLIC, PAPAYA ];

export const DEFAULT_ITEMS = reduce((acc, item) => ({ ...acc, [item]: 0 }), {}, VALID_ITEMS);
