'use client'

import Image from "next/image";
import {motion} from "framer-motion";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}> 
       <div className=" h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* Image Container */}

    <div className="h-1/2  lg:h-full lg:w-1/2 relative">
      <Image src="/hero1.png"
      fill
      className="object-contain"/>

    </div>
    {/* Text Container */}

    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center" >
      {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Designer, Coder, Team Collaborator – Crafting Digital Magic
        </h1>
        {/* desc */}
        <p className="">Welcome to my dynamic portfolio, a vivid tapestry of creativity and innovation woven with passion and dedication. Here, each project tells a story, inviting you to embark on a journey of discovery and inspiration. Explore the depths of design excellence and witness the boundless possibilities of digital innovation. 
        Step in, and let the magic of imagination unfold before your eyes.</p>
          {/* Buttons */}
          <div className=" w-full flex gap-4">
            <button className="p-4 rounded-lg ring-black bg-black text-white">View My Works</button>
            <button className="p-4 rounded-lg ring-black">Contact Me</button>

          </div>
    </div>
  </div>
  </motion.div>

  )
};

export default Homepage;
