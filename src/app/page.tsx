"use client"

import { icons } from "@/app/data/icons";
import { useState } from "react";
import Image from "next/image";
import { NavItem, ThemeToggle, SocialLink, NavDivider, ProjectCard, SkillsCard } from "@/app/components/components";
import { projects } from "@/app/data/projects";
import { skills } from "@/app/data/skills";
import { contacts } from "@/app/data/contacts";

export default function Home() {
  const [ darkMode, setDarkMode ] = useState<boolean>(true);
  return (
    <div>
      <main className={`overflow-x-hidden ${darkMode 
        ? "absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:8px_8px]" 
        : "absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px]"}`}>
        <nav className={`fixed top-7 left-1/2 transform -translate-x-1/2
                        py-4 rounded-4xl h-14
                        flex items-center justify-center
                        sm:w-auto transition-all duration-300
                        backdrop-blur-xs z-50
                        ${darkMode 
                          ? 'bg-[#1a1a1a]/80 shadow-[4px_4px_16px_#0a0a0a,-4px_-4px_16px_#2a2a2a]'
                          : 'bg-[#e0e5ec]/80 shadow-[4px_4px_16px_#b4b9be,-4px_-4px_16px_#ffffff]'
                        }`}>
          <ul className="flex items-center gap-4 px-6">
            <NavItem href="#home" icon={icons.homeIcon} label="Home" darkMode={darkMode} />
            <NavItem href="#projects" icon={icons.projectIcon} label="Projects" darkMode={darkMode} />
            <NavItem href="#skills" icon={icons.skillsIcon} label="Skills" darkMode={darkMode} />
            <NavItem href="#contact" icon={icons.contactIcon} label="Contact" darkMode={darkMode} />
            <NavDivider darkMode={darkMode} />
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </ul>
        </nav>
        <section id="home">
          <div className="container mx-auto max-w-7xl h-screen px-4">
            <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-8">
              <div className="md:w-1/3">
                <Image
                src="/rohan.jpeg"
                alt="Rohan's Image"
                width={200}
                height={200}
                className={`rounded-full mx-auto hover:transform hover:duration-500 hover:scale-105 ${
                darkMode
                  ? 'shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#2a2a2a]' 
                  : 'shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff]'
                }`}
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left space-y-4">
                <h1 className={`text-4xl font-bold ${
                  darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  {"Hello, I'm Rohan Kumar"}
                </h1>
                <p className={`text-xl ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Software Developer | Recent Graduate
                </p>
                <p className={`text-lg max-w-2xl ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  A passionate software developer with expertise in Python, C++ and JavaScript.
                  Currently exploring new technologies, playing chess, and gaming in my free time.
                </p>
                <div className="flex gap-8 justify-center md:justify-start items-center">
                    <a
                    href="/Rohan_Kumar.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-6 font-semibold rounded-lg
                    transition-all duration-200
                    shadow-lg hover:shadow-xl
                    hover:transition-transform active:scale-90
                    flex items-center h-8
                    hover:outline-1 outline-blue-400 hover:text-blue-400
                    ${darkMode
                    ? 'bg-[#1a1a1a] text-white shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#2a2a2a]'
                    : 'bg-[#e0e5ec] text-gray-800 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]'
                    }`}
                    >
                    Resume
                    </a>
                  <SocialLink href="https://github.com/Rohan-Kumar09" icon={icons.githubIcon} darkMode={darkMode}/>
                  <SocialLink href="https://www.linkedin.com/in/rohankumar099" icon={icons.linkedinIcon} darkMode={darkMode}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-12 text-center
              ${darkMode ? 'text-gray-100' : 'text-gray-800'}`
            }>
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((projects, index) => {
                return (
                  <ProjectCard
                    key={index}
                    title={projects.title}
                    description={projects.description}
                    image={projects.image}
                    href={projects.href}
                    darkMode={darkMode}
                    deployed={projects.deployed}
                    skills={projects.skills}
                  />
                )
              })}
            </div>
          </div>
        </section>
        <section id="skills" className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-4 mt-12 text-center
            ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Skills
          </h2>
          <div className="flex flex-col gap-8">
            {skills.map((skill, index) => (
              <SkillsCard
                key={index}
                title={skill.title}
                skills={skill.skills}
                darkMode={darkMode}
              />
            ))}
          </div>
        </section>
        <section id="contact">
          <div className="flex justify-center items-center h-screen">
              <div className="flex items-center gap-12 bg-white/10 backdrop-blur-md px-6 py-6 rounded-full
                              shadow-lg hover:shadow-xl transition-all duration-200">
                {contacts.map((contact, index) => (
                  <SocialLink
                    key={index}
                    icon={contact.icon}
                    href={contact.href}
                    darkMode={darkMode}
                    hover={contact.hover}
                    onClick={contact.onClick}
                  />
                ))}
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}