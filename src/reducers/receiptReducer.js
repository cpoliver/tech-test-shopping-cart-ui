import { RECEIVE_RECEIPT, REQUEST_RECEIPT, UPDATE_ITEMS } from '../actions';

const INIT_STATE = {
  isFetching: false,
  receipt: {}
};

const receiptReducer = (state = INIT_STATE, action) => {
  const actions = {
    [RECEIVE_RECEIPT]: {
      ...state,
      isFetching: false,
      receipt: action.receipt
    },
    [REQUEST_RECEIPT]: {
      ...state,
      items: action.items,
      isFetching: true
    },
    [UPDATE_ITEMS]: {
      ...state,
      items: action.items
    }
  };

  return actions[action.type] || state;
};

export default receiptReducer;
