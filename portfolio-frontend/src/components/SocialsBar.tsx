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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aaron-katey-kudadjie?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedinIn /> },
    { label: "Twitter", href: "https://x.com/khartey_?t=1LsGJoY4Eb7w0D_OLnLMXg&s=35", icon: <FaXTwitter /> },
    { label: "GitHub", href: "https://github.com/Adehwam21/", icon: <FaGithub /> },
    { label: "Telegram", href: "https://t.me/Webz_1", icon: <FaTelegramPlane /> },
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
