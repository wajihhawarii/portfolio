"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../utils/data";
import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";



type ProjectsSectionProps = {
  activeFilter: string;
};

const ProjectsSection = ({ activeFilter }: ProjectsSectionProps) => {
  const normalizedFilter = activeFilter.toLowerCase().split(" + ").map(f => f.trim());

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(p =>
          normalizedFilter.some(filter =>
            p.category.toLowerCase() === filter
          )
        );

  return (
    <section className='flex flex-wrap gap-x-4 gap-y-[2rem] justify-center flex-1'>
      <AnimatePresence>
        {filteredProjects.map((item, index) => (
          <motion.article
            layout
            initial={{ transform: "scale(0.4)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ type: "spring", damping: 5, stiffness: 50 }}
            key={index}
            className='border-[1px] border-[rgba(93,188,252,0.3)] rounded-[5px]
            transition-all duration-[0.3s] hover:!rotate-[1deg] overflow-hidden hover:!scale-[1.01]
            hover:border-blueColor bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))]'
          >
            <Image src={item.mainImage} alt={item.title} width={266} height={150} className='h-[150px]' />
            <div className='w-[266px] py-[1rem] px-[0.4rem]'>
              <h1 className='text-textColor capitalize font-medium'>{item.title}</h1>
              <p className='text-subtextColor text-[0.8rem] mt-[0.7rem] mb-[1.1rem]'>{item.description}</p>
              <div className='flex justify-between items-center'>
                <div className='flex items-center justify-start gap-[11px] text-[1.2rem] text-subtextColor'>
                  
                  <div className='flex items-start gap-2'>
                    {
                      item.downloadLink !== "" ?
                      <Link href={item.downloadLink} target="_blank" rel="noopener noreferrer">
                        <BsGooglePlay className='hover:text-[1.25rem] hover:text-iconHover cursor-pointer' />
                      </Link>:
                      null
                    }

                    {
                      item.downloadLinkIOS !== "" ?
                      <Link href={item.downloadLinkIOS} target="_blank" rel="noopener noreferrer">
                        <FaApple className='hover:text-[1.25rem] hover:text-iconHover cursor-pointer' />
                      </Link>:
                      null
                    }
                  </div>

                  {
                    item.github !== "" ?
                    <Link href={item.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className='hover:text-[1.25rem] hover:text-iconHover cursor-pointer' />
                    </Link>:
                    null
                  }
                </div>
                <Link href={`/projects/${item.id}`} className='flex justify-center text-blueColor text-[0.9rem]'>
                  more <IoArrowForwardOutline className='self-end' />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
