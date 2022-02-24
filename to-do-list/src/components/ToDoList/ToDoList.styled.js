import styled from 'styled-components';

export const Header = styled.header`
display: flex;
gap: 10px;
place-items: center;
margin-bottom: 22px;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
background-color: #ff4545;
width: 100%;
padding: 100px 50px 50px;
flex:1;
p:nth-child(n+2):nth-child(-n+4){
    color: hsla(0,0%,100%,.74);
    font-size: 12px;
    text-align: right;
    margin-bottom:2px;
}
input{
    margin-bottom: 25px;
}
textarea{
    margin-bottom: 25px;
    resize: none;
}
button{
    font-size:13.3px;
    font-family: 'Poppins';
}

`
export const ButtonBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`