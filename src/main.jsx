import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import { MyContext } from './context/GlobalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext.Provider value={{ /* context values go here */ }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext.Provider>
);
