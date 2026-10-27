'use client'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "James Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Maker",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
];
function Instructors() {
  return (
    <>
      <div className="relative h-160 overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2
            className="text-2xl md:text-4xl lg:text-7xl text-white
            font-bold text-center mb-8"
          >
            Meet Our Instructor
          </h2>
          <p className="text-base md:text-lg text-white text-center mb-4">
            professionals who will guide your musical journey
          </p>

          <div className="flex flex-row items-center 
          justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors}/>
          </div>
        </WavyBackground>
      </div>
    </>
  );
}

export default Instructors;
