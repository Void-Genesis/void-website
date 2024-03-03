"use client";

import { useEffect, useState, useRef } from "react";

import { gsap } from "gsap";

import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import SolutionsSection from "@/components/homepage/SolutionsSection";
import CaseStudySection from "@/components/homepage/CaseStudySection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import TeamSection from "@/components/homepage/TeamSection";
import CallToActionSection from "@/components/homepage/CallToActionSection";
import FirstSection from "@/components/homepage/FirstSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const firstSectionRef = useRef<any>();

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "visible";
  }, [isVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (firstSectionRef.current) {
        gsap.to(firstSectionRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            setIsVisible(false);
          },
        });
      }
    }, 5300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <div ref={firstSectionRef}>
          <FirstSection />
        </div>
      ) : (
        <>
          <HeroSection />
          {/* <SolutionsSection /> */}
          <CaseStudySection />
          <TestimonialSection />
          <TeamSection />
          <ServicesSection />
          <CallToActionSection />
          <Footer />
        </>
      )}
    </>
  );
}
