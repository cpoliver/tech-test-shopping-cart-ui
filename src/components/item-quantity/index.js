import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './item-quantity.css';

import { itemStringType } from '../../prop-types';

class ItemQuantity extends Component {
  static defaultProps = {
    count: 0
  }

  static propTypes = {
    item: itemStringType.isRequired,
    count: PropTypes.number.isRequired
  }

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
      <div className="item-quantity">
        <div className="item-quantity__icon">
          <img src={icon} alt={item} />
        </div>
        <div className="item-quantity__plusminus">
          <div className="item-quantity__plus" onClick={this.incrementCount}>
            <span>&#x25B2;</span>
          </div>
          <div className="item-quantity__count">{this.state.count}</div>
          <div className="item-quantity__minus" onClick={this.decrementCount}>
            <span>&#x25BC;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemQuantity;
