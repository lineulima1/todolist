import React from 'react';
import { INPUT } from './Input.styled';
import PropTypes from 'prop-types';

const Input = ({
  onClick,
  onBlur,
  onChange,
  placeholder,
  type,
  size,
  padding,
  width,
  margin,
  color,
  background,
  radius,
  height,
  required,
  border,
  value,
  maxLength,
}) => {
  return (
    <INPUT
      color={color}
      background={background}
      onClick={onClick}
      type={type}
      size={size}
      padding={padding}
      width={width}
      margin={margin}
      radius={radius}
      height={height}
      placeholder={placeholder}
      onBlur={onBlur}
      border={border}
      onChange={onChange}
      required={required}
      value={value}
      maxLength={maxLength}
    >
    </INPUT>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  radius: PropTypes.string,
  required: PropTypes.bool,

};

Input.defaultProps = {
  type: 'Input',
  size: '',
};

export default Input;