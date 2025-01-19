import { ReactNode } from "react";

export interface IButtonProps {
    className?: string;
    onClick?: () => void;
    children: ReactNode;
    href?: string
}

export interface INavMenuProps {
    isOpen: boolean;
    className?: string;
    children: ReactNode;
}

export interface ICardProps {
    image: string; // URL or path to the project image
    title: string;
    description: string;
    caseStudyPath?: string; // Path to the case study page
  }