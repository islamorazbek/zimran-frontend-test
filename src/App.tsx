import { Container } from '@mui/material';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/home';
import Payment from './routes/payment';

function App() {
  return (
    <Container maxWidth='md'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='payment' element={<Payment />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Container>
  );
}

export default App;
