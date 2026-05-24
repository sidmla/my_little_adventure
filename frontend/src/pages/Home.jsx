import React from "react";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import TopSellers from "@/components/TopSellers";
import TopSellerMarquee from "@/components/TopSellerMarquee";
import CategoriesByDuration from "@/components/CategoriesByDuration";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import AboutTeaser from "@/components/AboutTeaser";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <TrustBadges />
      <TopSellers />
      <CategoriesByDuration />
      <TopSellerMarquee />
      <WhyUs />
      <ReviewsCarousel />
      <AboutTeaser />
      <FAQ />
      <ContactSection />
    </div>
  );
}
