'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
function UpcommingWebinars() {
  const featuredWebinars = [
  {
    title: 'Understanding Music Theory',
    description:
      'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    slug: 'understanding-music-theory',
    isFeatured: true,
  },
  {
    title: 'The Art of Songwriting',
    description:
      'Learn the craft of songwriting from experienced musicians and songwriters.',
    slug: 'the-art-of-songwriting',
    isFeatured: true,
  },
  {
    title: 'Mastering Vocal Control',
    description:
      'Discover advanced vocal techniques to improve pitch, range, and stage performance.',
    slug: 'mastering-vocal-control',
    isFeatured: true,
  },
  {
    title: 'Introduction to Music Production',
    description:
      'Explore digital audio workstations, mixing basics, and modern beat making.',
    slug: 'introduction-to-music-production',
    isFeatured: true,
  },
  {
    title: 'Live Sound Engineering & Mixing',
    description:
      'Understand live acoustics, microphone placement, and live sound mixing fundamentals.',
    slug: 'live-sound-engineering-and-mixing',
    isFeatured: false,
  },
  {
    title: 'Advanced Guitar Techniques',
    description:
      'Take your guitar playing to the next level with intricate fingerpicking and solos.',
    slug: 'advanced-guitar-techniques',
    isFeatured: false,
  },
];
  return (
    <>
      <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Muscial Journey
            </p>
          </div>
          <div className="mt-10">
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect items={featuredWebinars.map(webinar=>(
                {
                    title:webinar.title,
                    description:webinar.description,
                    link:'/'
                }
              ))} />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href={"/"}
              className="px-4 py-2 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-400 hover:text-black-700 transition duration-200"
            >
              View all webinars
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcommingWebinars;
