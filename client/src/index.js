import React from 'react';
import ReactDOM from 'react-dom/client';
import APPRoutes from './Pages/Routes';
import GlobalStyle from './Pages/styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <APPRoutes />
  </React.StrictMode>,
);
