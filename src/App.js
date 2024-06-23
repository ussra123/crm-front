import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import ScreenshotsSection from './Components/ScreenshotsSection/ScreenshotsSection';
import ContactForm from './Components/ContactForm/ContactForm';
import FAQs from './Components/FAQs/FAQs';
import Footer from './Components/Footer/Footer';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main Interface */}
          <Route path="/" element={
            <div className="App">
              <Navbar />
              <HeroSection />
              <FeaturesSection />
              <ScreenshotsSection />
              <ContactForm />
              <FAQs />
              <Footer />
            </div>
          } />
          {/* Authentication */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
