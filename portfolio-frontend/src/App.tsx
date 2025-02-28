import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectPage/ProjectsPage";
import Navbar from "./components/Navbar";
import { ScrollProvider } from "./context/ScrollContext";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ScrollToTopBtn from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <ScrollProvider>
        <div className="flex font-poppins flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
          <Footer />
          <ScrollToTopBtn />
        </div>
      </ScrollProvider>
    </Router>
  );
};

export default App;
