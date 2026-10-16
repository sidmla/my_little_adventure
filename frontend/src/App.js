import React, { useEffect } from 'react';
import '@/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadPopup from '@/components/LeadPopup';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Home from '@/pages/Home';
import About from '@/pages/About';
import CategoryPage from '@/pages/CategoryPage';
import TripDetail from '@/pages/TripDetail';
import CancellationPolicy from '@/pages/CancellationPolicy';
import TermsOfService from '@/pages/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/domestic"
              element={<CategoryPage slug="domestic" />}
            />
            <Route
              path="/international"
              element={<CategoryPage slug="international" />}
            />
            <Route
              path="/pilgrimage"
              element={<CategoryPage slug="pilgrimage" />}
            />
            <Route path="/weekend" element={<CategoryPage slug="weekend" />} />
            <Route
              path="/backpacking"
              element={<CategoryPage slug="backpacking" />}
            />
            <Route path="/couple" element={<CategoryPage slug="couple" />} />
            <Route path="/group" element={<CategoryPage slug="group" />} />
            <Route path="/trip/:tripId" element={<TripDetail />} />
            <Route path="/who-travels-with-us" element={<About />} />
            <Route
              path="/cancellation-policy"
              element={<CancellationPolicy />}
            />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route
              path="/refund-policy"
              element={<Navigate to="/cancellation-policy" replace />}
            />
            <Route
              path="/terms"
              element={<Navigate to="/terms-of-service" replace />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <LeadPopup />
        <FloatingWhatsApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
