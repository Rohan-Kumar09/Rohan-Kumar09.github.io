import { SocialLinkProps } from "@/app/lib/definitions";
import { icons } from "@/app/data/icons";
import { copyToClipboard } from "@/app/Utils/utils";

export const contacts: SocialLinkProps[] = [
  {
    icon: icons.discordIcon,
    hover: true,
    onClick: () => copyToClipboard("darkprince09")
  },
  {
    icon: icons.linkedinIcon,
    href: "https://www.linkedin.com/in/rohankumar099",
    hover: true,
  },
  {
    icon: icons.githubIcon,
    href: "https://github.com/Rohan-Kumar09",
    hover: true,
  },
  {
    icon: icons.mailIcon,
    href: "mailto:rohankumar534280@gmail.com",
    hover: true,
  },
  {
    icon: icons.instagramIcon,
    href: "/aboutme",
    hover: true,
  },
]