import React from 'react';
import PropTypes from 'prop-types';

import './receipt.css';

import { VALID_ITEMS } from '../../constants';

const toPrice = (amount) => `£${amount.toFixed(2)}`;

const renderHeader = () => (
  <li className="c-receipt-line-item c-receipt-line-item-header">
    <span className="c-receipt-line-item__id">ITEM</span>
    <span className="c-receipt-line-item__count">QUANTITY</span>
    <span className="c-receipt-line-item__price">UNIT COST</span>
    <span className="c-receipt-line-item__discount">DISCOUNT</span>
    <span className="c-receipt-line-item__subtotal">SUBTOTAL</span>
  </li>
);

const renderLineItem = ({ id, count, price, discount, subtotal }) => (
  <li className="c-receipt-line-item" key={id}>
    <span className="c-receipt-line-item__id">{id}</span>
    <span className="c-receipt-line-item__count">{count}</span>
    <span className="c-receipt-line-item__price">{toPrice(price)}</span>
    <span className="c-receipt-line-item__discount">{toPrice(discount)}</span>
    <span className="c-receipt-line-item__subtotal">{toPrice(subtotal)}</span>
  </li>
);

const renderDivider = () => (
  <li className="c-receipt-line-item c-receipt-line-item-divider">
    ---------------------------------------------------
  </li>
);

const renderTotal = (total) => (
  <li className="c-receipt--total">TOTAL: {toPrice(total)}</li>
);

const Receipt = ({ lineItems, total }) => (
  <div className="c-receipt">
    <ul>
      {renderHeader()}
      {renderDivider()}
      {lineItems.map(renderLineItem)}
      {renderDivider()}
      {renderTotal(total)}
    </ul>
  </div>
);

Receipt.defaultProps = {
  lineItems: [{
    id: 'apple',
    count: 1,
    price: 0.25,
    discount: 0,
    subtotal: 0.25
  }, {
    id: 'orange',
    count: 1,
    price: 0.3,
    discount: 0,
    subtotal: 0.3
  }, {
    id: 'garlic',
    count: 2,
    price: 0.15,
    discount: 0,
    subtotal: 0.3
  }, {
    id: 'papaya',
    count: 3,
    price: 0.5,
    discount: 0.5,
    subtotal: 1
  }],
  total: 1.85
};

Receipt.propTypes = {
  total: PropTypes.number.isRequired,
  lineItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOf(VALID_ITEMS).isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired
  })).isRequired
};

export default Receipt;
