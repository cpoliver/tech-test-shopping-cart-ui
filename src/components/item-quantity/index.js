import React from 'react';
import PropTypes from 'prop-types';

import './item-quantity.css';

import { VALID_ITEMS } from '../../constants';

class ItemQuantity extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: props.count };
  }

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState(function(prevState, props) {
        return { count: prevState.count - 1 };
      });
    }
  };

  incrementCount = () => {
    this.setState(function(prevState, props) {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { item } = this.props;
    const icon = require(`../../../public/icons/${item}.svg`);

    return (
      <div className="c-item-quantity">
        <div className="c-item-quantity__icon">
          <img src={icon} alt={item} />
        </div>
        <div className="c-item-quantity__plusminus">
          <div className="c-item-quantity__plus" onClick={this.incrementCount}>
            <span>&#x25B2;</span>
          </div>
          <div className="c-item-quantity__count">{this.state.count}</div>
          <div className="c-item-quantity__minus" onClick={this.decrementCount}>
            <span>&#x25BC;</span>
          </div>
        </div>
      </div>
    );
  }
}

ItemQuantity.defaultProps = {
  count: 0
};

ItemQuantity.propTypes = {
  item: PropTypes.oneOf(VALID_ITEMS).isRequired,
  count: PropTypes.number.isRequired
};

export default ItemQuantity;
