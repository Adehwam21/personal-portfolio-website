import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <Router>
      <Header />
      <Homepage/>
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
