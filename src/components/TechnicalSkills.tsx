"use client";

import React from "react";

const TechnicalSkills = () => {
    const skills = [
        "Flutter(android & ios & web)",
        "State Management (GetX, Provider, Cubit)",
        "RESTful APIs (http, Dio)",
        "Local Storage (Sqflite, SharedPreferences)",
        "Google Maps Integration",
        "Push Notifications",
        "Payment Gateways (PayPal, Stripe, MyFatura)",
        "App Store Deployment (Google Play & Apple Store)",
        "Integration with Google Play Console",
        "Integration with Apple Certificates & Provisioning Profiles",
        "Firebase (Auth, Firestore, FCM, etc.)",
        "Flavors (Dev & Staging & Prod) + env",
        "MVC Architecture",
        "Clean Architecture (Data, Domain, Presentation)",
        "Git, GitHub, GitLab",
        "API Testing Tools (Postman, Swagger)",
        "Problem Solving",
        "Clean Code Practices",
        "Object-Oriented Programming (OOP)",
        "SOLID Principles",
        "Design Patterns (e.g., Singleton, Repository, Factory)",
        "Technical Tools (ClickUp, clockify, Figma)"
    ];

    // توزيع العناصر على عمودين عموديًا
    const half = Math.ceil(skills.length / 2);
    const column1 = skills.slice(0, half);
    const column2 = skills.slice(half);

    return (
        <section
            id="technical-skills"
            className="p-6 md:p-10 bg-bgHeader text-textColor rounded-md shadow-[1px_1px_40px_#3532324a] my-8"
        >
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-blueColor">
                Technical Skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-x-6 text-[1rem]">
                {[column1, column2].map((column, colIndex) => (
                    <div key={colIndex} className="flex-1 space-y-4">
                        {column.map((skill, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="text-blueColor">•</span>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalSkills;