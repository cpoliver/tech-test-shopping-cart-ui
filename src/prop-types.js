import PropTypes from 'prop-types';

import { VALID_ITEMS } from './constants';

export const itemType = PropTypes.shape({
  item: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
});

export const itemsType = PropTypes.shape({
  apple: PropTypes.number.isRequired,
  orange: PropTypes.number.isRequired,
  garlic: PropTypes.number.isRequired,
  papaya: PropTypes.number.isRequired
});

export const itemStringType = PropTypes.oneOf(VALID_ITEMS);

export const lineItemType = PropTypes.shape({
  id: itemStringType.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired
});

export const lineItemsType = PropTypes.arrayOf(lineItemType);

export const receiptType = PropTypes.shape({
  lineItems: PropTypes.array,
  total: PropTypes.number
});
