export const CART_ENDPOINT = 'https://tech-test-shopping-cart.herokuapp.com/cart';

export const APPLE = 'apple';
export const ORANGE = 'orange';
export const GARLIC = 'garlic';
export const PAPAYA = 'papaya';

export const VALID_ITEMS = [ APPLE, ORANGE, GARLIC, PAPAYA ];

export const DEFAULT_ITEMS = VALID_ITEMS.map((item) => ({ item, count: 0 }));
