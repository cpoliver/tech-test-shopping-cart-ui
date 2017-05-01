import React from 'react';

import './recalculate-button.css';

export default ({ onRecalculate }) => (
  <button className="c-recalculate-button" onClick={(event) => onRecalculate(event)}>
    RECALCULATE
  </button>
);
