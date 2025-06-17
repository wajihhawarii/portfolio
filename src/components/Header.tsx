"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMoon } from "react-icons/ai";
import { LuSun } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";


const Header = () => {


  const [showModel,setShowModel] = useState(false)

  const links = [
    {name:"About",path: "/"},
    {name:"Articles",path: "/articles"},
    {name:"Projects",path: "/projects"},
    {name:"Speaking",path: "/speaking"},
    {name:"Contact",path: "/contact"},
  ]

  return (
    <header className='flex items-center justify-between px-[2.4rem] pt-[1.2rem]'>
      <button className='md:hidden bg-bgHeader w-[2.4rem] h-[2.4rem] flex items-center justify-normal 
        rounded-full border-[1px] border-[rgba(244,165,96,0.249)] hover:border-[rgb(244,165,96)]
        transition-all delay-[0.2s] active:scale-[0.9]
        '
        onClick={() => setShowModel((prev) => !prev)}>
        <IoMenu className='w-full text-subtextColor text-[24px]' />
      </button>
      <div/>
      <div className='hidden md:flex items-center justify-center gap-4 bg-bgHeader py-[0.77rem] px-[1.6rem] 
        rounded-[55px] shadow-[1px_1px_40px_#3532324a]'>
        {
          links.map((item, index) => (
            <Link key={index} href={item.path}
              className='text-textColor text-[0.88rem] font-medium opacity-[0.9] 
              hover:text-[0.9rem] hover:opacity-[1] hover:text-blueColor transition-all delay-[0.2s]'
            >
              {item.name}
            </Link>
          ))
        }
      </div>
      <button className='bg-bgHeader w-[2.4rem] h-[2.4rem] flex items-center justify-normal rounded-full
        border-[1px] border-[rgba(244,165,96,0.249)] hover:border-[rgb(244,165,96)] transition-all delay-[0.2s]
        active:scale-[0.9]
        '>
        <AiOutlineMoon className='w-full text-subtextColor text-[24px]' />
      </button>


      {
        showModel && (
          <div className='fixed inset-0 bg-[rgba(40,40,48,0.91)] myMove backdrop-blur-[4px]'>
            <div className='w-[90%] sm:w-[75%] mx-auto mt-[2rem] rounded-[1rem] py-[1rem] px-[1.5rem] sm:px-[2rem]
              bg-mainColor
            '>

              <div className='w-fit ml-auto pb-0 pt-[0.2rem]'>
                <button onClick={() => setShowModel((prev) => !prev)}>
                  <IoMdClose className='text-[1.5rem] text-textColor hover:text-[1.7rem] 
                  hover:text-red-600 transition-all delay-[0.3s] hover:rotate-180' />
                </button>
              </div>
              {
                links.map((item, index) => (
                  <div key={index} className={`${links.length - 1 === index ? null : "border-b-[1px] border-borderColor"}
                    pt-[0.5rem] pb-[0.77rem]`}>
                    <Link href={item.path}
                      className='text-textColor text-[0.88rem] font-medium opacity-[0.9] 
                      hover:text-[0.9rem] hover:opacity-[1] hover:text-blueColor transition-all delay-[0.2s]'
                    >
                      {item.name}
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </header>
  )
}

export default Header