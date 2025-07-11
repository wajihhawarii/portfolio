"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

type MyProjectsProps = {
  title: string;
  category: string[]; // category is always an array
  image: string;
  description: string;
};

type ProjectsSectionProps = {
  activeFilter: string;
};

const ProjectsSection = ({ activeFilter }: ProjectsSectionProps) => {
  const myProject: MyProjectsProps[] = [
    {
      title: "react project",
      category: ["React"],
      image: "/images/card.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis non, sed magnam accusamus"
    },
    {
      title: "flutter project",
      category: ["Flutter", "Dart"],
      image: "/images/card.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis non, sed magnam accusamus"
    },
    {
      title: "css project",
      category: ["CSS"],
      image: "/images/card.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis non, sed magnam accusamus"
    },
    {
      title: "flutter project 2",
      category: ["Flutter"],
      image: "/images/card.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis non, sed magnam accusamus"
    },
    {
      title: "next project",
      category: ["React"],
      image: "/images/card.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis non, sed magnam accusamus"
    },
  ];

  // Normalize the filter text, splitting on ' + ' to handle combined filters like "Flutter + Dart"
  const normalizedFilter = activeFilter.toLowerCase().split(" + ").map(f => f.trim());

  const filteredProjects =
    activeFilter === "All Projects"
      ? myProject
      : myProject.filter(p =>
          normalizedFilter.some(filter =>
            p.category.some(cat => cat.toLowerCase() === filter)
          )
        );

  return (
    <section className='flex flex-wrap gap-x-4 gap-y-[2rem] justify-center flex-1'>
      {filteredProjects.map((item, index) => (
        <article key={index} className='border-[1px] border-[rgba(93,188,252,0.3)] rounded-[5px]
          transition-all duration-[0.3s] hover:rotate-[1deg] overflow-hidden cursor-pointer hover:scale-[1.01]
          hover:border-blueColor bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))]'>
          <Image src={item.image} alt='' width={266} height={100} className='h-auto' />
          <div className='w-[266px] py-[1rem] px-[0.4rem]'>
            <h1 className='text-textColor capitalize font-medium'>{item.title}</h1>
            <p className='text-subtextColor text-[0.8rem] mt-[0.7rem] mb-[1.1rem]'>{item.description}</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center justify-start gap-[11px] text-[1.2rem] text-subtextColor'>
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
  );
};

export default ProjectsSection;
