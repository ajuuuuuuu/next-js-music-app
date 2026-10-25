import HeroSection from "@/component/HeroSection"
import FeaturedCourses from"@/component/FeaturedCourses"
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home() {
  return (

     <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
       
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
     </main>
   
  );
}
