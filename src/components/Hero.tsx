/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useRef } from 'react'
import { MdVerified } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import devAnimation from "../../public/animation/devAnimation.json";
import { motion } from "framer-motion";
import Link from 'next/link';

const Hero = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <section className='flex items-center justify-between mt-[3rem]'>

      {/* left section */}
      <div className='flex-1 xl:w-3/5'>

        <div className='flex items-end min-h-[88px]'>
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/images/profile.jpg" alt='' width={88} height={88}
            className='w-[118px] h-[118px] rounded-full object-cover p-[1px] border-[1px] border-orange-600
              shadow-[2px_2px_40px_rgba(203,200,200,0.586)_inset] mr-[0.6rem]'
          />
          <MdVerified className='text-blueColor text-[1.1rem] mb-[0.3rem]' />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className='text-[1.50rem] leading-[2.8rem] my-6 text-textColor font-bold'
        >
          Software Engineer & Flutter Mobile Developer with 2 years of proven experience delivering high‑performance applications for Android and iOS.
        </motion.h1>

        <p className='text-[0.9rem] leading-[1.65rem] mb-8 text-subtextColor'>

          I am a Flutter and Dart developer passionate about creating innovative mobile applications. I enjoy solving complex problems and turning ideas into user-friendly solutions. I am committed to continuous learning and regularly explore new technologies and best practices to improve my skills.
        </p>

        <div className='flex gap-6'>
          {/* Facebook */}
          <Link href="https://www.facebook.com/wajeh.hware/" target="_blank">
            <FaFacebook className='text-[1.3rem] text-subtextColor cursor-pointer transition-all delay-[0.3s] hover:text-[1.4rem] hover:text-iconHover' />
          </Link>

          {/* Email */}
          <Link href="mailto:wajihhoware@gmail.com">
            <MdEmail className='text-[1.3rem] text-subtextColor cursor-pointer transition-all delay-[0.3s] hover:text-[1.4rem] hover:text-iconHover' />
          </Link>

          {/* WhatsApp */}
          <Link href="https://wa.me/+963996972054" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='text-[1.3rem] text-subtextColor cursor-pointer transition-all delay-[0.3s] hover:text-[1.4rem] hover:text-iconHover' />
          </Link>

          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/wajih-hawari-a432a123b/" target="_blank">
            <ImLinkedin className='text-[1.3rem] text-subtextColor cursor-pointer transition-all delay-[0.3s] hover:text-[1.4rem] hover:text-iconHover' />
          </Link>
        </div>

      </div>

      {/* right section */}
      <div className='hidden xl:inline-block w-2/5'>
        <Lottie
          loop={true}
          animationData={devAnimation}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current?.setSpeed(0.5);
          }}
          className='translate-x-[100px] translate-y-[55px] max-w-full'
        />
      </div>
    </section>
  )
}

export default Hero;
