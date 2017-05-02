import React from 'react';
import PropTypes from 'prop-types';

import './receipt.css';

import { lineItemsType } from '../../prop-types';

const toPrice = (amount) => `£${amount.toFixed(2)}`;

const renderHeader = () => (
  <li className="receipt-line-item receipt-line-item-header">
    <span className="receipt-line-item__id">ITEM</span>
    <span className="receipt-line-item__count">QUANTITY</span>
    <span className="receipt-line-item__price">UNIT COST</span>
    <span className="receipt-line-item__discount">DISCOUNT</span>
    <span className="receipt-line-item__subtotal">SUBTOTAL</span>
  </li>
);

const renderLineItem = ({ id, count, price, discount, subtotal }) => (
  <li className="receipt-line-item" key={id}>
    <span className="receipt-line-item__id">{id}</span>
    <span className="receipt-line-item__count">{count}</span>
    <span className="receipt-line-item__price">{toPrice(price)}</span>
    <span className="receipt-line-item__discount">{toPrice(discount)}</span>
    <span className="receipt-line-item__subtotal">{toPrice(subtotal)}</span>
  </li>
);

const renderDivider = () => (
  <li className="receipt-line-item receipt-line-item-divider">
    ---------------------------------------------------
  </li>
);

const renderTotal = (total) => (
  <li className="receipt--total">TOTAL: {toPrice(total)}</li>
);

const Receipt = ({ lineItems, total = 0 }) => (
  <div className="receipt">
    <ul>
      {lineItems && renderHeader()}
      {lineItems && renderDivider()}
      {lineItems && lineItems.map(renderLineItem)}
      {lineItems && renderDivider()}
      {lineItems && renderTotal(total)}
    </ul>
  </div>
);

Receipt.defaultProps = {};

Receipt.propTypes = {
  total: PropTypes.number,
  lineItems: lineItemsType
};

export default Receipt;
