/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import { MdVerified } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";



const Hero = () => {
  return (
    <section className='flex items-center justify-between mt-[3rem]'>
      
      {/* left section */}
      <div className='flex-1'>

        <div className='flex items-end'>
          <Image src="/images/wew.jpg" alt='' width={88} height={88}
            className='w-[88px] h-[88px] rounded-full object-cover p-[1px] border-[1px] border-orange-600
              shadow-[2px_2px_40px_rgba(203,200,200,0.586)_inset] mr-[0.6rem]
            '
          />
          <MdVerified className='text-blueColor text-[1.1rem] mb-[0.3rem]' />
        </div>

        <div className='text-[2.85rem] leading-[3.3rem] my-6 text-textColor'>
          Software designer, founder, and amateur astronaut.
        </div>

        <p className='text-[0.9rem] leading-[1.65rem] mb-8 text-subtextColor'>
          I'm wajeh Al howari, a software designer and enterpreneur based in Lattakia City.I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own teams.
        </p>

        <div className='flex gap-6'>
          <FaTwitter 
            className='text-[1.3rem] gap-[1.5rem] text-subtextColor cursor-pointer transition-all delay-[0.3s] hover:text-[1.4rem] hover:text-iconHover' />
          <FaInstagram 
            className='text-[1.3rem] gap-[1.5rem] text-subtextColor cursor-pointer transition-all delay-[0.3s] hover:text-[1.4rem] hover:text-iconHover' />
          <FaGithub 
            className='text-[1.3rem] gap-[1.5rem] text-subtextColor cursor-pointer transition-all delay-[0.3s] hover:text-[1.4rem] hover:text-iconHover' />
          <ImLinkedin 
            className='text-[1.3rem] gap-[1.5rem] text-subtextColor cursor-pointer transition-all delay-[0.3s] hover:text-[1.4rem] hover:text-iconHover' />
        </div>

      </div>

      {/* right section */}
      <div>hello</div>
    </section>
  )
}

export default Hero