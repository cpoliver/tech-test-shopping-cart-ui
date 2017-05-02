import { CART_ENDPOINT } from '../constants';

export const RECEIVE_RECEIPT = 'RECEIVE_RECEIPT';
export const REQUEST_RECEIPT = 'REQUEST_RECEIPT';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';

export const receiveReceipt = (receipt) => ({
  type: RECEIVE_RECEIPT,
  receipt
});

export const requestReceipt = (items) => (dispatch) => {
  dispatch({ type: REQUEST_RECEIPT });

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  return fetch(CART_ENDPOINT, { headers, method: 'POST', body: JSON.stringify(items) })
    .then(response => response.json())
    .then(receipt => dispatch(receiveReceipt(receipt)));
};

export const updateItemQuantity = (item, count) => ({
  type: UPDATE_ITEMS,
  item: { [item]: count }
});
