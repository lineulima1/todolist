import React from "react";
import { Txt } from "./Text.styled";
import PropTypes from "prop-types";

const Text = ({ text, as, color, margin, fontsize, weight, decoration }) => {
  return (
    <Txt
      as={as}
      color={color}
      margin={margin}
      fontsize={fontsize}
      weight={weight}
      decoration={decoration}
    >
      {text}
    </Txt>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  fontsize: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  decoraton: PropTypes.string,
  as: PropTypes.string,
};

Text.defaultProps = {
   decoration: 'none',
  };
export default Text;
