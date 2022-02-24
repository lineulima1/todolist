import styled from "styled-components";

export const EditBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px rgb(0 0 0 / 14%);
  left: 50%;
  opacity: 0;
  padding: 25px;
  position: fixed;
  text-align: center;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) scale(0.9);
  transform: translate(-50%, -50%) scale(0.9);
  transition: all 0.2s ease;
  visibility: hidden;
  width: 400px;
  z-index: 1000;
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
  visibility: visible;
  h4 {
    font-weight: 500;
    margin-bottom: 20px;
  }
`;
export const InputBox = styled.div`
  display: block;
  input {
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(0 0 0 / 23%);
    padding: 8px;
    width: 100%;
    margin-top: 25px;
  }
  textarea {
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(0 0 0 / 23%);
    padding: 8px;
    width: 100%;
    height: 100px;
    margin-top: 15px;
    resize: none;
  }
`;
export const BoxButton = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 25px;
  button {
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    height: 40px;
    transition: all 0.2s ease;
    width: 120px;
    font-family: 'Poppins';
  }
`;
