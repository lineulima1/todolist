import styled from 'styled-components';

export const TxtArea = styled.textarea`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  font-size: ${(props) => props.size};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border};
`