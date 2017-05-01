import { CART_ENDPOINT } from '../constants';

export const RECEIVE_RECEIPT = 'RECEIVE_RECEIPT';
export const REQUEST_RECEIPT = 'REQUEST_RECEIPT';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';

export const updateItems = (item, count) => ({
  type: UPDATE_ITEMS,
  items: { [item]: count }
});

export const requestReceipt = () => ({
  type: REQUEST_RECEIPT
});

export const receiveReceipt = (receipt) => ({
  type: RECEIVE_RECEIPT,
  receipt
});

export const fetchReeipt = (items) => (dispatch) => {
  dispatch(requestReceipt())

  return fetch(CART_ENDPOINT)
    .then(response => response.json())
    .then(receipt => dispatch(receiveReceipt(receipt)));
};
