import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa6";
// import { FaRedditAlien } from "react-icons/fa";
import { ISocialsProps } from "../types";

const SocialsBar: React.FC<ISocialsProps> = ({ className, classNameFooterIcons }) => {
  const socials = [
    { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedinIn /> },
    { label: "Twitter", href: "https://twitter.com/yourprofile", icon: <FaXTwitter /> },
    { label: "GitHub", href: "https://github.com/yourprofile", icon: <FaGithub /> },
    { label: "Telegram", href: "https://t.me/yourprofile", icon: <FaTelegramPlane /> },
    // { label: "Discord", href: "https://discord.com/invite/yourinvite", icon: <FaDiscord /> },
    // { label: "Reddit", href: "https://reddit.com/user/yourprofile", icon: <FaRedditAlien /> },
  ];

  return (
    <nav className={`${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={classNameFooterIcons}
        >
          {social.icon}
        </a>
      ))}
    </nav>
  );
};

export default SocialsBar;
