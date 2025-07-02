import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";




const Main = () => {

  const styleBtn:string = `
    w-[7.2rem] sm:w-[11rem] text-center text-[0.9rem] sm:text-[1.05rem] bg-[rgba(36,37,46,1)] capitalize
    rounded-[5px] font-bold transition-all delay-[0.3s] hover:opacity-100
  `

  const btnArray = [
    "All Projects",
    "Dart",
    "FLutter",
    "Dart + Flutter",
    "Node & Express",
  ]

  return (
    <main className='flex gap-[2.64rem] flex-col sm:flex-row items-center sm:items-start'>

      <section className='flex flex-row flex-wrap justify-center sm:flex-col gap-[10px]'>
        {
          btnArray.map((item,index) => (
            <button key={index}
              className={`${styleBtn} ${index === 0 ? "py-[0.8rem] opacity-100 tracking-[0.6px] border-blueColor border-[1px]" : "opacity-50 py-[0.8rem] sm:py-[0.75rem]"}
              `}>
              {item}
            </button>
          ))
        }
      </section>

      {/* Right Section */}
      <section className='flex flex-wrap gap-x-4 gap-y-[2rem] justify-center'>
        {["aa","bb","cc","dd","ee"].map((item) => (
          <article key={item} className='border-[1px] border-[rgba(93,188,252,0.3)] rounded-[5px]
          transition-all duration-[0.3s] hover:rotate-[1deg] overflow-hidden cursor-pointer hover:scale-[1.01]
          hover:border-blueColor bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))]
        '>
          <Image src="/images/card.jpg" alt='' width={266} height={100} className='h-auto' />
          <div className='w-[266px] py-[1rem] px-[0.4rem]'>
            <h1 className='text-textColor'>Landing Page 2</h1>
            <p className='text-subtextColor text-[0.8rem] mt-[0.7rem] mb-[1.1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis non, sed magnam accusamus</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center justify-start gap-[11px] text-[1.2rem] text-subtextColor
                
              '>
                <FaLink className='hover:text-[1.25rem] hover:text-iconHover cursor-pointer' />
                <FaGithub className='hover:text-[1.25rem] hover:text-iconHover cursor-pointer' />
              </div>
              <Link href="/" className='flex justify-center text-blueColor text-[0.9rem]'>
                more <IoArrowForwardOutline className='self-end' />
              </Link>
            </div>
          </div>
        </article>
        ))}
      </section>
    </main>
  )
}

export default Main