import React from 'react';
import PropTypes from 'prop-types';

import { APPLE, ORANGE, GARLIC, PAPAYA } from '../../constants';

const renderLineItem = ({ id, count, price, discount, subtotal }) => (
  <li className="c-receipt-line-item" key={id}>
    <span className="c-receipt-line-item__id">{id}</span>
    <span className="c-receipt-line-item__count">{count}</span>
    <span className="c-receipt-line-item__price">{price}</span>
    <span className="c-receipt-line-item__discount">{discount}</span>
    <span className="c-receipt-line-item__subtotal">{subtotal}</span>
  </li>
);

const renderTotal = (total) => (
  <li className="c-receipt--total">TOTAL: {total}</li>
);

const Receipt = ({ lineItems, total }) => (
  <div className="c-receipt">
    <ul>
      {lineItems.map(renderLineItem)}
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
    id: PropTypes.oneOf([ APPLE, ORANGE, GARLIC, PAPAYA ]).isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired
  })).isRequired
};

export default Receipt;
