import React from "react";
import { Spn } from "./Span.styled";

const Span = ({ background, radius, width, height, position, cursor }) => {
  return (
    <Spn
      background={background}
      width={width}
      radius={radius}
      height={height}
      position={position}
      cursor={cursor}
    ></Spn>
  );
};

export default Span;
