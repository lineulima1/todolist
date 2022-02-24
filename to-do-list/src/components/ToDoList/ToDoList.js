import React,{useState} from "react";
import { useRecoilState } from "recoil";
import { textState, textTitleState, MapList } from "../../atoms/atoms";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Text from "../Text/Text";
import Textarea from "../Textarea/Textarea";
import { Form, ButtonBox, Header } from "./ToDoList.styled";
import { handleTitle, handleTextarea, onClick } from "../../utils/functions";
import Add from "../../svg/Add";

const ToDoList = () => {
  const [text, setText] = useRecoilState(textState);
  const [title, setTitle] = useRecoilState(textTitleState);
  const [list, setList] = useRecoilState(MapList);
  const [counterInput,setCounterInput] = useState(0);
  const [counterTextarea,setCounterTextarea] = useState(0);

  return (
    <Form onSubmit={() => setList([...list, onClick(title, text)])}>
    <Header>
    <Add />
    <Text text="Make New Task" fontsize="18px" color="white" as="h2" />
  </Header>
      <Text text={`${counterInput}/50`} fontsize="12px" color="white" as="p" />
      <Input
        type="text"
        value={title}
        onChange={(e) => {setTitle(handleTitle(e));setCounterInput(e.target.value.length)}}
        width="100%"
        padding="10px"
        border="none"
        radius="5px"
        placeholder="your task topic"
        maxLength='50'
        required
      />
      <Text text={`${counterTextarea}/75`} fontsize="12px" color="white" as="p" />
      <Textarea
        type="text"
        placeholder="more info about task"
        value={text}
        required
        onChange={(e) => {setText(handleTextarea(e));setCounterTextarea(e.target.value.length)}}
        height="120px"
        border="none"
        radius="5px"
        padding="10px"
        maxLength='75'
        width="100%"
      />
      <ButtonBox>
        <Button
          border="2px solid white"
          text="Create New Task"
          background="#ff4545"
          radius="5px"
          width="250px"
          cursor="pointer"
          padding="8px"
          margin="10px 0 0 0"
          type="submit"
          color="white"
        />
      </ButtonBox>
    </Form>
  );
};
export default ToDoList;
