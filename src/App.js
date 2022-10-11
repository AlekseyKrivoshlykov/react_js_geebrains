import logo from './logo.svg';
import './App.css';
import { Form as FormClass} from './components/Form';
import { Message }  from './components/Message';
import { ChildApp }  from './components/ChildApp';
import { useState } from 'react';



export const App = () => {
  const [variableFromApp] = useState('data from parent component App')


  return (
    <div className="App">

      <Message name="message from component Message" />
      <ChildApp name={variableFromApp} />

      {/* <FormClass /> */}
    </div>
    
  );
}

export default App;
