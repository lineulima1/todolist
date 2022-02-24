import styled from 'styled-components';


export const Spn = styled.span`
content:'';
height:${(props) => props.height};
border-radius:${(props) => props.radius};
border:${(props) => props.border};
cursor:${(props) => props.cursor};
position:${(props) => props.position};
background-color: ${(props) => props.background};
`