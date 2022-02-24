import React from 'react';
import { TxtArea } from './Textarea.styled';
import PropTypes from 'prop-types';

const Textarea = ({
  onClick,
  onBlur,
  onChange,
  placeholder,
  size,
  padding,
  width,
  margin,
  maxLength,
  color,
  background,
  radius,
  height,
  required,
  border,
  value,
  
}) => {
  return (
    <TxtArea
      color={color}
      background={background}
      onClick={onClick}
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
    </TxtArea>
  );
};

Textarea.propTypes = {
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

export default Textarea;