import { ReactNode } from "react";

export interface IButtonProps{
    className: string;
    onClick: () => void;
    children: ReactNode;
}