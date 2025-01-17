import { ReactNode } from "react";

export interface IButtonProps {
    className?: string;
    onClick: () => void;
    children: ReactNode;
}

export interface INavMenuProps {
    isOpen: boolean;
    className?: string;
    children: ReactNode;
}