import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './components/store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Routing } from './components/container-components/Routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <PersistGate persistor={persistor}>
      <div className="App">
        {/* <Routing /> */}
        <App />
      </div>
    </PersistGate>
  </Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
