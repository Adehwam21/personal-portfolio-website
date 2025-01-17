import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex font-poppins flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
