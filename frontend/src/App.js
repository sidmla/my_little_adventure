import React, { useEffect, useState } from "react";
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
            <Route path="/about-us" element={<About />} />
            <Route path="/1n-2d" element={<CategoryPage slug="1n-2d" />} />
            <Route path="/2n-3d" element={<CategoryPage slug="2n-3d" />} />
            <Route path="/3n-4d" element={<CategoryPage slug="3n-4d" />} />
            <Route path="/4n-5d" element={<CategoryPage slug="4n-5d" />} />
            <Route path="/seasonal" element={<CategoryPage slug="seasonal" />} />
            <Route path="/divine" element={<CategoryPage slug="divine" />} />
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
