import React from 'react';
import PropTypes from 'prop-types';

const CategoryButton = ({ handleClick, active, label }) => (
  <button
    className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
    type="button"
    aria-pressed={!!active[label]}
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  active: PropTypes.object.isRequired,
};

export default CategoryButton;
