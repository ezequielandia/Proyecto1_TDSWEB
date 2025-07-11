import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return(
   <BrowserRouter basename="/Proyecto1_TDSWEB">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
    );
};

export default App;