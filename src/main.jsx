import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/baseRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
