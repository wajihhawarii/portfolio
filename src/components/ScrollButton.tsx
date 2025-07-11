"use client"

import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () => {

  useEffect(()=>{
    window.addEventListener("scroll", () =>{
      if (window.scrollY > 300) {
        setShowScrollBTN(true)
      } else{
        setShowScrollBTN(false)
      }
    })
  },[]);

  const [showScrollBTN, setShowScrollBTN] = useState(false);

  return (
    <div>
      {
        showScrollBTN && (
          <a href="#up" className={`${showScrollBTN ? "opacity-100 ": "opacity-0"} transition-all duration-[3s]`}>
            <button className={`scroll2Top`}>
              <IoIosArrowUp /> 
            </button>
          </a>
        )
      }
    </div>
  )
}

export default ScrollButton