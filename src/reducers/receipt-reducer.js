import { RECEIVE_RECEIPT, REQUEST_RECEIPT, UPDATE_ITEMS } from '../actions';
import { DEFAULT_ITEMS } from '../constants';

const INIT_STATE = {
  isFetching: false,
  items: DEFAULT_ITEMS,
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
      isFetching: true
    },
    [UPDATE_ITEMS]: {
      ...state,
      items: Object.assign({}, state.items, action.item)
    }
  };

  return actions[action.type] || state;
};

export default receiptReducer;
