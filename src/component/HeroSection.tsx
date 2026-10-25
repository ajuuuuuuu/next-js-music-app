import React from 'react'
import Link from "next/link";
import {Spotlight} from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
interface Props {}

function HeroSection(props: Props) {
    const {} = props

    return (
        <>
            <div className="h-auto md:h-[40rem] w-full rounded-md
             flex-col item-center justify-center relative 
             overflow-hidden mx-auto py-10 md:py-0">
                
                <Spotlight
                     className="-top-40 left-0 md:-top-20 md:left-60"
                     fill="white"
                 />

                <div className="p-4 relative z-10  w-full text-center">

                    <h1 className="text-4xl mt-45 md:text-7xl font-bold 
                    bg-clip-text text-transparent 
                    bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Master the art of music
                    </h1>
                    <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                        Dive into our comprehensive music courses and transfrom 
                        your musical journey today. whether 
                        you are a begineeer or looking to refine your skills, 
                        join us to unlock your true potential.
                    </p>
                    <div className="mt-8">
                        <Link href={"/courses"}>
                            <Button
                            borderRadius="1.75rem"
                            >
                                Explorer clouses
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
