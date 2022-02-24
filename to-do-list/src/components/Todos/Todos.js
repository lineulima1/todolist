import React from "react";
import { useRecoilState, useRecoilValue, selector } from "recoil";
import { MapList, listStatus, editState } from "../../atoms/atoms";
import { todoComplete, todoDel } from "../../utils/functions";
import Button from "../Button/Button";
import Edit from "../Edit/Edit";
import { Container, Header, SelectBox } from "./Todos.styled";
import Text from "../Text/Text";
import All from "../../svg/All";
import Span from "../Span/Span";

const Todos = () => {
  const handleList = selector({
    key: "handleList",
    get: ({ get }) => {
      const list = get(MapList);
      const showList =
        status === "all" ? list : list.filter((item) => item.complete === true);
      return showList.map((item, index) => (
        <div key={index}>
          <li>
            <Span background={item.complete ? "#69ff34;" : "#ff4545"}></Span>
            <Text
              text={item.title}
              fontsize="20px"
              color={item.complete ? "rgba(0,0,0,.486)" : "black"}
              weight="bold"
              as="h4"
              decoration={item.complete ? "line-through" : "none"}
            />
            <Text
              text={item.text}
              fontsize="14px"
              color={item.complete ? "rgba(0,0,0,.486)" : "black"}
              as="p"
              decoration={item.complete ? "line-through" : "none"}
            />
            <div>
              <Button
                radius="50px"
                width="12px"
                height="12px"
                background="red"
                border="none"
                onClick={() => setList(todoDel(list.indexOf(item), list))}
              ></Button>
              <Button
                radius="50px"
                width="12px"
                height="12px"
                background="yellow"
                margin="0px 2px"
                border="none"
                onClick={() =>
                  setEdit(
                    { index: list.indexOf(item), showEdit: true },
                    localStorage.setItem("item", JSON.stringify(item))
                  )
                }
              ></Button>
              <Button
                radius="50px"
                width="12px"
                height="12px"
                background="green"
                border="none"
                onClick={() => setList(todoComplete(list.indexOf(item), list))}
              >
                {item.complete ? "Undone" : "Done"}
              </Button>
            </div>
          </li>
        </div>
      ));
    },
  });

  const [list, setList] = useRecoilState(MapList);
  const [status, setStatus] = useRecoilState(listStatus);
  const handleListAdd = useRecoilValue(handleList);
  const [edit, setEdit] = useRecoilState(editState);

  return (
    <Container>
      <Header>
        <All />
        <Text
          text="All Tasks"
          fontsize="18px"
          color="black"
          as="h2"
          weight="bold"
        />
      </Header>
      <SelectBox>
        <select onClick={(e) => setStatus(e.target.value)}>
          <option value="all">All Task</option>
          <option value="done">Done</option>
        </select>
        <Button
          radius="5px"
          width="130px"
          border="none"
          background="white"
          onClick={() => setList([])}
          text="Clear All"
        ></Button>
      </SelectBox>
      <ul>
        {handleListAdd}
        {list.length === 0 && <Text margin='20px 0 0 0' weight='300' text='You dont have any task to do'/>}
      </ul>
      {edit.showEdit && <Edit />}
    </Container>
  );
};
export default Todos;
