import React from 'react';
import PropTypes from 'prop-types';

import './recalculate-button.css';

const RecalculateButton = ({ handleClick }) => (
  <button className="recalculate-button" onClick={(event) => handleClick(event)}>
    RECALCULATE
  </button>
);

RecalculateButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default RecalculateButton;
