import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction: column;
width:50%;
padding:50px;
ul{
    display: flex;
    flex-direction: column;
    height: 80%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
}
li{
    margin: 25px 0px 0px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 20px rgb(0 0 0 / 16%);
    padding: 20px 20px 20px 40px;
    position: relative;
 span{
    border-radius: 50px;
    content: "";
    height: 80%;
    left: 12px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: all .2s ease;
    width: 5px;
 }
 div{
    cursor: pointer;
    display: flex;
    gap: 10px;
    position: absolute;
    right: 10px;
    top: 10px;
 }
}
h4{
    word-wrap: break-word;
    font-size: 20px;
    font-weight: 500;
}
p{
    word-wrap: break-word;
    font-size: 14px;
    font-weight: 300;
    margin-top: 10px;
}


`

export const Header = styled.header`
    display: flex;
    gap: 10px;
    place-items: center;
`

export const SelectBox = styled.div`
display: flex;
justify-content: space-between;
margin-top: 25px;

button{
    box-shadow: 0 0 20px rgb(0 0 0 / 15%);
    font-size:13.3px;
    padding:10px;
    font-family:'Poppins';
    height:36px;
    display: flex;
    justify-content: center;
    align-items: center;
}
select{
    border: none;
    cursor: pointer;
    display: flex;
    font-family: 'Poppins';
    justify-content: space-between;
    padding: 8px;
    height:36px;
    width: 130px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 20px rgb(0 0 0 / 14%);
    font-size:13.3px;
    padding:10px;
}
`