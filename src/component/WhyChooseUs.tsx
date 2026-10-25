"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { div } from "motion/react-client";
import { Stick } from "next/font/google";
import React from "react";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery.",
  },
  {
    title: "Expert Instruction & Community Support",
    description:
      "Learn directly from seasoned industry professionals who bring years of real-world experience to the virtual studio. Connect with a vibrant community of fellow musicians to collaborate, share feedback, and grow together.",
  },
  
  {
    title: "Expert Instruction & Community Support",
    description:
      "Learn directly from seasoned industry professionals who bring years of real-world experience to the virtual studio. Connect with a vibrant community of fellow musicians to collaborate, share feedback, and grow together.",
  },
  {
    title: "Expert Instruction & Community Support",
    description:
      "Learn directly from seasoned industry professionals who bring years of real-world experience to the virtual studio. Connect with a vibrant community of fellow musicians to collaborate, share feedback, and grow together.",
  },
  {
    title: "Expert Instruction & Community Support",
    description:
      "Learn directly from seasoned industry professionals who bring years of real-world experience to the virtual studio. Connect with a vibrant community of fellow musicians to collaborate, share feedback, and grow together.",
  },
  {
    title: "Expert Instruction & Community Support",
    description:
      "Learn directly from seasoned industry professionals who bring years of real-world experience to the virtual studio. Connect with a vibrant community of fellow musicians to collaborate, share feedback, and grow together.",
  },
];

function WhyChooseUs() {
  return (
    <div className="scrollbar-none">
      <StickyScroll  content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
