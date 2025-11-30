import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThankYou />} />
        <Route path="/thank-you-for-installing-our-ai-detection-tool" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default App;
