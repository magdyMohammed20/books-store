import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './tailwind.output.css'
import 'font-awesome/css/font-awesome.min.css';
import AppProvider from './context/context'

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById('root')
);