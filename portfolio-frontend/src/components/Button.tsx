import React from 'react'
import { IButtonProps } from '../types'

const Button: React.FC<IButtonProps> = ({className, onClick, children }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md focus:outline-1 focus:ring-2 focus:ring-offset-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;