import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextProvider from './components/context/ContextProvider';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ContextProvider>
);


