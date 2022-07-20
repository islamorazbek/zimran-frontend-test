import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './routes/home';
import { Payment } from '@mui/icons-material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <CssBaseline />
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);