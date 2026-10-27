"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";
import { cn } from "@/utils/cn";
const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of chords and rhythm. The instructors are world-class and break down complex concepts effortlessly.",
    name: "Aarav Sharma",
    title: "Guitar Student",
  },
  {
    quote:
      "The community support and structured lessons gave me the confidence to finally perform live. Absolute game-changer for my vocals!",
    name: "Priya Patel",
    title: "Vocal Training",
  },
  {
    quote:
      "From learning the basics of sound engineering to mastering advanced mixing, this academy covers everything with incredible depth.",
    name: "Rohan Verma",
    title: "Music Production",
  },
  {
    quote:
      "The piano lessons here changed my perspective on melody and harmony. The personalized feedback is unmatched.",
    name: "Ananya Iyer",
    title: "Classical Piano",
  },
  {
    quote:
      "I always struggled with rhythm until I took the percussion classes. Highly recommended for anyone looking to turn passion into skill.",
    name: "Kabir Mehta",
    title: "Drumming & Percussion",
  },
  {
    quote:
      "The instructors create a welcoming environment where you can experiment, make mistakes, and genuinely grow as a musician.",
    name: "Neha Singh",
    title: "Violin Enthusiast",
  },
];
function musicSchoolTestimonialCards() {
  return (
    <>
      <div
        className="h-160 w-full dark:bg-black  
      dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[20px_20px]",
            "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <p className="relative z-20 bg-linear-to-bb from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Backgrounds
        </p>

        <h2 className="text-3xl font-bold text-center mb-8 z-10">
          Hear our Harmony: Voices of success
        </h2>

        <div
          className="justify-center w-full overflow-hidden px-4
        sm:px-6 lg:px-8"
        >
          <div className="w-full" max-w-6xl="true">
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default musicSchoolTestimonialCards;
