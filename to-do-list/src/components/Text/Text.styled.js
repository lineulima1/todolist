import styled from 'styled-components';

export const Txt = styled.h1`
  font-family: 'Poppins';
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.weight};
  outline: none;
  text-decoration:${(props) => props.decoration};

`