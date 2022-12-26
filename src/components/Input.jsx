import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, placeholder, onChange, onKeyUp, value }) => {
  return (
    <input type={type} className={className} placeholder={placeholder} value={value} onChange={onChange} onKeyUp={onKeyUp} />
  )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}

export default Input