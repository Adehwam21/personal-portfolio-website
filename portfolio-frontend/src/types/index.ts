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
    tools: string[];
    githubUrl?: string; // Path to the case study page
}


export interface ISocialsProps {
    className?: string;
    classNameFooterIcons?: string;
}

export interface IScrollContextValue {
    setRef: (key: string, element: HTMLElement) => void;
    scrollTo: (key: string) => void;
    }

export interface IAnimatorProps{
    children: ReactNode;
}


export interface IContactFormData {
    name: string;
    email: string;
    message: string;
}