import logo from './logo.svg';
import './App.css';
import { Form as FormClass} from './components/Form';
import { Message }  from './components/Message';
import { ChildApp }  from './components/ChildApp';
import React, { useEffect, useState } from 'react';
import { MessageList } from './components/MessageList';
import { FormRobot } from './components/FormRobot';
import { Chat } from './components/Chat';
import { Routing } from './components/Routing';
import { Provider } from 'react-redux';
import { store } from './components/store/index';

export function App () {

  const [chatMessages, setChatMessages] = useState([])

  return (
    <Provider store={store}>
      <div className="App">

      {/* <MessageList />
      <hr/>
      <FormClass />
      <hr/>
      <FormRobot />
      <hr/>
      <Chat /> */}

      <Routing />
      
      </div>
    </Provider>
  );

}

export default App;
