"use client";

import React, { useState, useMemo } from "react";
import ProjectsSection from "./ProjectsSection";
import { projects } from "@/utils/data"; // تأكد تستورد المشاريع من الملف الصح

const Main = () => {
  const styleBtn: string = `
    w-[7.2rem] sm:w-[11rem] text-center text-[0.9rem] sm:text-[1.05rem] bg-[rgba(36,37,46,1)] capitalize
    rounded-[5px] font-bold transition-all delay-[0.3s] hover:opacity-100
  `;

  // نطلع الـ categories فريدة مع زر "All Projects"
  const btnArray = useMemo(() => {
    const categories = Array.from(new Set(projects.map((p) => p.category)));
    return ["All Projects", ...categories];
  }, []);

  const [activeFilter, setActiveFilter] = useState("All Projects");

  return (
    <main
      id="projects"
      className="flex gap-[2.64rem] flex-col sm:flex-row items-center sm:items-start"
    >
      <section className="flex flex-row flex-wrap justify-center sm:flex-col gap-[10px]">
        {btnArray.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(item)}
            className={`${styleBtn} ${
              activeFilter === item
                ? "py-[0.8rem] opacity-100 tracking-[0.6px] border-blueColor border-[1px]"
                : "opacity-50 py-[0.8rem] sm:py-[0.75rem]"
            }`}
          >
            {item}
          </button>
        ))}
      </section>

      {/* Right Section */}
      <ProjectsSection activeFilter={activeFilter} />
    </main>
  );
};

export default Main;
