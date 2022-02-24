import React,{useState} from 'react';
import {  useRecoilState} from "recoil";
import {MapList,editState} from "../../atoms/atoms";
import { handleTitle,handleTextarea } from '../../utils/functions';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';
import Textarea from '../Textarea/Textarea';
import {EditBox,InputBox,BoxButton} from './Edit.styled';

export const Edit = () => {

const handleSave = () => {
        const data = {
            title,
            text,
            complete: false,
        };
        const newList = list.map((item, i) => {
            return i === edit.index ? data : item;
          });
        setList(newList);
        setText("");
        setTitle("");
        setEdit({index:-1,showEdit:false});
    } 
    const todoitem = JSON.parse(localStorage.getItem("item"));
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [list, setList] = useRecoilState(MapList);
    const [edit, setEdit] = useRecoilState(editState);

return (
    <EditBox>
    <Text text='Are you sure to edit?' fontsize='20px' color='black' as='h4'/>
    <InputBox>
    <Input maxLength='50' onChange={e => setTitle(handleTitle(e))} 
    placeholder={`you editing ${todoitem.title}`}
    />
    <Textarea maxLength='75' onChange={e => setText(handleTextarea(e))} placeholder="edit content ..."/>
    </InputBox>
    <BoxButton>
    <Button background='#ff4545'onClick={() => setEdit({index:-1,showEdit:false})}text='Cancel'/>
    <Button background='#59b637'onClick={() => handleSave(list.indexOf())} text='Confirm'/>
    </BoxButton>
    </EditBox>
)
}
export default Edit;