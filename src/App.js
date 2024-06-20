import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import ScreenshotsSection from './Components/ScreenshotsSection/ScreenshotsSection';
import ContactForm from './Components/ContactForm/ContactForm';
import FAQs from './Components/FAQs/FAQs';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Overview from './Components/Dashboard/Overview';
import Sales from './Components/Dashboard/Sales';

function App() {
  return (
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

        {/*Dashboard*/}
        <Route path="dashboard" element={<Layout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="sales" element={<Sales />} />
          <Route index element={<Overview />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;