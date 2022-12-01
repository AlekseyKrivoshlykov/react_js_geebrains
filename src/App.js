import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './components/store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Routing } from './components/container-components/Routing';

export function App () {

  const [chatMessages, setChatMessages] = useState([])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Routing />
        </div>
      </PersistGate>
    </Provider>
  );

}

export default App;
