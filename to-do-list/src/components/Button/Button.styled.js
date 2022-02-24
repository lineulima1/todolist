import styled from 'styled-components';

export const Btn = styled.button`
  font-family: 'Open Sans';
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  font-size: ${(props) => props.size};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border};
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;