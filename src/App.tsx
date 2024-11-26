import { useState } from 'react';

import './assets/sass/main.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage title={'Home page'} />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
