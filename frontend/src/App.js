import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Home from "@/pages/Home";
import About from "@/pages/About";
import CategoryPage from "@/pages/CategoryPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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
            <Route path="/pilgrimage" element={<CategoryPage slug="pilgrimage" />} />
            <Route path="/couple" element={<CategoryPage slug="couple" />} />
            <Route path="/group" element={<CategoryPage slug="group" />} />
            <Route path="/domestic" element={<CategoryPage slug="domestic" />} />
            <Route path="/international" element={<CategoryPage slug="international" />} />
            <Route path="/who-travels-with-us" element={<About />} />
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
