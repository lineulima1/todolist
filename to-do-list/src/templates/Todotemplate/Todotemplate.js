import ToDoList from '../../components/ToDoList/ToDoList';
import Todos from '../../components/Todos/Todos';
import {Container,Header,Content} from './Todotemplate.styled';
import Text from "../../components/Text/Text";
import Main from '../../svg/Main';



const Todotemplate = () => {
 
  return (
    <Container>
    <Header>
      <Main/>
      <Text text='Todo App' fontsize='25px' color='#ff4545' as='h1' weight='bold'/>
    </Header>
    <Content>
    <ToDoList />
    <Todos/>
    </Content>
    </Container>
    
  );
}
export default Todotemplate;
