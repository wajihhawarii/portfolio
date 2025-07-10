import React from 'react'

import Hero from '@/components/Hero';
import Main from '@/components/Main';
import ContactUs from '@/components/ContactUs';
import { IoIosArrowUp } from "react-icons/io";



const page = () => {
  return (
    <div className=''>
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <ContactUs />
      <div className='divider' />
      <a href="#up">

      <button className='scroll2Top'>
        <IoIosArrowUp /> 
      </button>

      </a>
    </div>
  )
}

export default page