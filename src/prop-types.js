import PropTypes from 'prop-types';

import { VALID_ITEMS } from './constants';

export const itemType = PropTypes.shape({
  item: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
})

export const itemStringType = PropTypes.oneOf(VALID_ITEMS);

export const itemArrayType = PropTypes.arrayOf(itemType);

export const receiptType = PropTypes.shape({
  lineItems: PropTypes.array,
  total: PropTypes.number
});
