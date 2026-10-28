"use client";

import React from "react";
import { Meteors } from "@/component/ui/meteor";

function Page() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
     
        <div
          className="flex flex-col  min-h-screen min-w-full items-center 
         justify-center overflow-hidden border
         border-gray-800 bg-gray-900  shadow-xl"
        >
          <h1 className="relative z-50 text-6xl mt-35 font-bold text-white">
            Contact Us
          </h1>

          <p className=" mt-6 text-base flex-wrap font-normal text-slate-500">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>
          <form className="m-4 flex w-full max-w-2xl flex-col">
           
            <input
              id="username"
              className=" rounded-lg border border-gray-700 bg-black px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder="enter email"
            />

           
            <textarea
              id="message"
              className="mt-4 min-h-48 w-full resize-y rounded-lg border border-gray-700 bg-black px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="your message"
              rows={6}
            />
          </form>

          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300 sm:mb-4">
            Send
          </button>

          
          <Meteors number={20} />
        </div>
      
    </div>
  );
}

export default Page;
