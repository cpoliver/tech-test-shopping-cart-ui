import { flatten, map, pipe, repeat } from 'ramda';

import { CART_ENDPOINT } from '../constants';

export const RECEIVE_RECEIPT = 'RECEIVE_RECEIPT';
export const REQUEST_RECEIPT = 'REQUEST_RECEIPT';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';

export const receiveReceipt = (receipt) => ({
  type: RECEIVE_RECEIPT,
  receipt
});

// e.g. { apple: 2, orange: 1 } -> [ 'apple', 'apple', 'orange' ]
const flattenItems = (items) => {
  const toStringArray = (item) => items[item] > 0 ? repeat(item, items[item]) : [];

  return pipe(
    Object.keys,
    map(toStringArray),
    flatten
  )(items);
}

export const requestReceipt = (items) => (dispatch) => {
  dispatch({ type: REQUEST_RECEIPT });

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  const body = JSON.stringify(flattenItems(items));

  return fetch(CART_ENDPOINT, { headers, method: 'POST', body })
    .then(response => response.json())
    .then(receipt => dispatch(receiveReceipt(receipt)));
};

export const updateItemQuantity = (item, count) => ({
  type: UPDATE_ITEMS,
  item: { [item]: count }
});
