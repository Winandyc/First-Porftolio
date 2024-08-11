import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import FirstPage from './pages/FirstPage';
import Home from './pages/Home';
import About from './pages/About';

import './Global-styles/global.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
