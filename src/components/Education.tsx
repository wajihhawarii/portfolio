"use client";

import React from "react";

const EducationSection = () => {
    const education = [
        "B.Sc. in Computer Science – Tishreen University (2020 - 2025)",
        "Lebanese Certificate – Flutter Training Program (2024)"
    ];

    return (
        <section
            id="education"
            className="p-6 md:p-10 bg-bgHeader text-textColor rounded-md shadow-[1px_1px_40px_#3532324a] my-8"
        >
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-blueColor">
                Education
            </h2>

            <div className="grid grid-cols-1 gap-y-4 text-[1rem]">
                {education.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <span className="text-blueColor">•</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;