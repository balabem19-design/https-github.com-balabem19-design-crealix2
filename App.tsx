import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { CasesPage } from './pages/Cases';
import { SecretariaSmartLanding } from './pages/SecretariaSmartLanding';

// Wrapper for route transitions
const AppContent: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="animate-[fadeIn_0.5s_ease-out]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/secretaria-smart" element={<SecretariaSmartLanding />} />
        </Routes>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;