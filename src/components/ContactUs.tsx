import React from 'react'
import { MdEmail } from "react-icons/md";
import "./style.css"

const ContactUs = () => {
  return (
    <section>
      <h1 className='text-[2.1rem] text-textColor mb-[1rem] flex items-center justify-start'>
        <MdEmail className='color-subtextColor text-[1.8rem] mr-[1rem]' />
        Contact Us
      </h1>
      <p className='text-textColor mb-[2rem] leading-[1.65rem]'>Contact us for more information and Get notified when I published something new.</p>

      <div className='flex justify-between items-center'>
        <form className='flex flex-col sm:block mx-auto sm:mx-0 w-[85%] sm:w-fit'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center'>
            <label htmlFor="email" className='text-subtextColor'>Email Address:</label>
            <input required type="email" name='' id='email'
              className='bg-[rgba(63,63,70,0.15)] border-[1px] border-[rgb(63,63,70)] sm:w-[16rem] px-[1rem] py-[0.7rem] sm:ml-[1rem] rounded-[5px]
                hover:border-[rgb(45,212,191)] text-[1.1rem] w-full mt-[1rem] sm:mt-0'
            />
          </div>
          
          <div className='mt-6 flex flex-col sm:flex-row items-start sm:items-center'>
            <label htmlFor="message" className='text-subtextColor sm:self-center'>Your message:</label>
            <textarea required name='' id='message'
              className='bg-[rgba(63,63,70,0.15)] border-[1px] border-[rgb(63,63,70)] sm:w-[16rem] px-[1rem] py-[0.7rem] sm:ml-[1rem] rounded-[5px]
                hover:border-[rgb(45,212,191)] text-[1.1rem] min-h-[9rem] w-full mt-[1rem] sm:mt-0'
            ></textarea>
          </div>

          <button
            className='bg-[rgba(36,37,46,1)] py-[0.75rem] px-[2rem] text-center text-[1.05rem] capitalize border-[1px] rounded-[5px] mt-[1.8rem] border-[rgba(63,63,70)] transition-all delay-[0.3s] hover:scale-[0.97]
              mx-auto w-[150px] sm:m-fit
            '
          >Submit</button>
        </form>
        <div className='hidden sm:block'>animation</div>
      </div>
    </section>
  )
}

export default ContactUs