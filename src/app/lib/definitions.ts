import { ReactNode } from "react";

export interface NavItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  darkMode: boolean;
}

export interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export interface SocialLinkProps {
  href?: string;
  icon: ReactNode;
  darkMode?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  darkMode?: boolean;
  deployed?: boolean;
  skills?: string[];
}

export interface SkillCardProps {
  title: string;
  darkMode?: boolean;
  skills: (string | SkillItemProps)[];
}

export interface SkillItemProps {
  name: string;
  level?: number;
}