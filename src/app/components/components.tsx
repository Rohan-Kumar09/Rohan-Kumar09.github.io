import Image from "next/image";
import { 
  NavItemProps, 
  ThemeToggleProps, 
  SocialLinkProps, 
  ProjectCardProps, 
  SkillCardProps
} from "@/app/lib/definitions";
import { icons } from "@/app/data/icons";
import { skillIcons } from "@/app/data/icons";

export const NavItem = ({ href, icon, label, darkMode }: NavItemProps) => (
  <li>
    <a href={href} className={`flex items-center gap-2
                  cursor-pointer rounded-xl px-4 py-2
                  backdrop-saturate-200
                  hover:outline-1 outline-blue-400 hover:text-blue-400
                  ${darkMode 
                    ? 'bg-[#1a1a1a] text-gray-100 shadow-[2px_2px_10px_#0a0a0a,-2px_-2px_10px_#2a2a2a] active:shadow-[inset_2px_2px_10px_#0a0a0a,inset_-2px_-2px_10px_#2a2a2a] hover:text-blue-400'
                    : 'bg-[#e0e5ec] text-gray-900 shadow-[2px_2px_10px_#b8b9be,-2px_-2px_10px_#ffffff] active:shadow-[inset_2px_2px_10px_#b8b9be,inset_-2px_-2px_10px_#ffffff] hover:text-blue-600'
                  }`}>
      <button className="cursor-pointer">{icon}</button>
      <span className="sm:inline hidden">{label}</span>
    </a>
  </li>
);

export const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => (
  <li>
    <button 
      onClick={() => setDarkMode(!darkMode)} 
      className={`flex items-center gap-2
                  rounded-xl px-4 py-2
                  transition-all duration-200
                  cursor-pointer
                  hover:outline-1 outline-blue-400 hover:text-blue-400
                  ${darkMode 
                    ? 'bg-[#1a1a1a] text-gray-200 shadow-[2px_2px_10px_#0a0a0a,-2px_-2px_10px_#2a2a2a] active:shadow-[inset_2px_2px_10px_#0a0a0a,inset_-2px_-2px_10px_#2a2a2a] hover:text-blue-400'
                    : 'bg-[#e0e5ec] text-gray-800 shadow-[2px_2px_10px_#b8b9be,-2px_-2px_10px_#ffffff] active:shadow-[inset_2px_2px_10px_#b8b9be,inset_-2px_-2px_10px_#ffffff] hover:text-blue-600'
                  }`}
    >
      {darkMode ? icons.sunIcon : icons.moonIcon}
    </button>
  </li>
);

export const SocialLink = ({ href, icon, darkMode, hover, onClick }: SocialLinkProps) => (
  onClick ? ( // for Discord icon copies to clipboard
    <button  
      onClick={onClick}
      className={`cursor-pointer hover:transition-transform scale-200 p-1 rounded-full 
                  hover:outline-1 outline-blue-400 hover:text-blue-400
                  ${hover ? 'transform transition-all duration-300 ease-in-out hover:scale-[250%] hover:-translate-y-4' : ''}
                  ${darkMode 
                    ? 'bg-[#1a1a1a] text-gray-200 shadow-[2px_2px_10px_#0a0a0a,-2px_-2px_10px_#2a2a2a] hover:text-blue-400'
                    : 'bg-[#e0e5ec] text-gray-800 shadow-[2px_2px_10px_#b8b9be,-2px_-2px_10px_#ffffff] hover:text-blue-600'
                  } active:shadow-[inset_2px_2px_10px_#b8b9be,inset_-2px_-2px_10px_#ffffff]`}
      >{icon}
    </button>)
    :
    (<a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className={`cursor-pointer hover:transition-transform scale-200 p-1 rounded-full 
                  hover:outline-1 outline-blue-400 hover:text-blue-400
                  ${hover ? 'transform transition-all duration-300 ease-in-out hover:scale-[250%] hover:-translate-y-4' : ''}
                  ${darkMode 
                    ? 'bg-[#1a1a1a] text-gray-200 shadow-[2px_2px_10px_#0a0a0a,-2px_-2px_10px_#2a2a2a] hover:text-blue-400'
                    : 'bg-[#e0e5ec] text-gray-800 shadow-[2px_2px_10px_#b8b9be,-2px_-2px_10px_#ffffff] hover:text-blue-600'
                  } active:shadow-[inset_2px_2px_10px_#b8b9be,inset_-2px_-2px_10px_#ffffff]`}
      >{icon}
    </a>
  )
);

export const NavDivider = ({ darkMode }: { darkMode?: boolean }) => (
  <hr className={`h-7 w-px mx-0.5 border-none ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`} />
);

export const ProjectCard = ({ title, description, image, href, darkMode, deployed, skills}: ProjectCardProps) => (
  <div className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]
    ${darkMode 
      ? 'bg-[#1a1a1a] shadow-[4px_4px_16px_#0a0a0a,-4px_-4px_16px_#2a2a2a] hover:shadow-[8px_8px_24px_#0a0a0a,-8px_-8px_24px_#2a2a2a]' 
      : 'bg-[#e0e5ec] shadow-[4px_4px_16px_#b8b9be,-4px_-4px_16px_#ffffff] hover:shadow-[8px_8px_24px_#b8b9be,-8px_-8px_24px_#ffffff]'}`
    }>
    
    <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
      <Image 
        src={image}
        alt={title}
        width={200}
        height={200}
        className="object-contain w-full h-full transition-transform duration-300"
        priority={false}
        loading="lazy"
      />
    </div>
    
    <h3 className={`text-xl font-bold mb-2 
      ${darkMode ? 'text-gray-100' : 'text-gray-800'}`
    }>
      {title}
    </h3>
    
    <p className={`mb-4 line-clamp-3
      ${darkMode ? 'text-gray-400' : 'text-gray-600'}`
    }>
      {description}
    </p>
    
    <div className="flex justify-between items-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-sm font-medium transition-colors
          hover:outline-1 outline-blue-400 hover:text-blue-400 p-1.5 rounded-lg
          ${darkMode 
            ? 'text-blue-400 hover:text-blue-300' 
            : 'text-blue-600 hover:text-blue-500'
          }`}
      >
        {deployed ? "View Deploy" : "View Source Code" }
        <div className="scale-150">{icons.chevronIcon}</div>
      </a>

      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 max-w-[64%]">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className={`p-1.5 hover:outline-1 outline-blue-400 
                          rounded-lg text-xs cursor-default
                          flex items-center gap-1
              ${darkMode 
                  ? 'bg-gray-800 text-gray-200' 
                  : 'bg-gray-200 text-gray-800'}`
              }>
              {skillIcons[`${skill.toLowerCase()}Icon` as keyof typeof skillIcons]}
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
)

export const SkillsCard = ({ title, skills, darkMode }: SkillCardProps) => (
  <div className="w-full px-6 py-4">
    <h2 className={`text-2xl font-bold mb-4 
      ${darkMode ? 'text-gray-100' : 'text-gray-800'}
      relative inline-block
      after:content-[''] after:block after:w-full after:h-1 
      after:bg-blue-400 after:absolute after:-bottom-1`}>
      {title}
    </h2>
    {skills && skills.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-3 rounded-lg cursor-default
              hover:outline-1 outline-blue-400 hover:text-blue-400
              ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <span className={`text-sm
              ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {typeof skill === 'string' ? skill : skill.name}
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
)