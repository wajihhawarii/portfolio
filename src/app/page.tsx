import React from 'react'

import Hero from '@/components/Hero';
import Main from '@/components/Main';
import ContactUs from '@/components/ContactUs';


const page = () => {
  return (
    <div className=''>
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <ContactUs />
      <div className='divider' />
    </div>
  )
}

export default page