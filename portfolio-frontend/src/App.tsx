import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar';
import { ScrollProvider } from './context/ScrollContext';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollProvider>
        <div className="flex font-poppins flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </ScrollProvider>
    </Router>
  )
}

export default App;
