import {RecoilRoot} from 'recoil';
import { GlobalStyle } from './styles/GlobalStyles';
import Todotemplate from './templates/Todotemplate/Todotemplate';

function App() {
 
  return (
    
    <RecoilRoot>
    <GlobalStyle/>
    <Todotemplate/>
    </RecoilRoot>
  );
}

export default App;
