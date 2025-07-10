import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const links = [
    {name:"About",path: "/"},
    {name:"Articles",path: "/articles"},
    {name:"Projects",path: "/projects"},
    {name:"Speaking",path: "/speaking"},
    {name:"Contact",path: "/contact"},
  ]

  return (
    <footer className='flex flex-col md:flex-row items-center justify-between pb-[1.9rem] gap-[2rem] md:gap-0'>

      <ul className='flex items-center justify-start gap-[1rem]'>
        {
          links.map((item, index) => (
            <Link key={index} href={item.path}
              className='text-subtextColor text-[0.9rem] font-normal hover:font-medium 
              hover:text-[1rem] hover:text-blueColor transition-all delay-[0.2s]'
            >
              {item.name}
            </Link>
          ))
        }
      </ul>

      <p className='text-[rgba(113,113,122)]'>©2025 Spencer Sharp. All rights reserved</p>

    </footer>
  )
}

export default Footer