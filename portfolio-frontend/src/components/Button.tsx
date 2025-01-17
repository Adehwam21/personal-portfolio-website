import React from 'react'
import { IButtonProps } from '../types'

const Button: React.FC<IButtonProps> = ({className, onClick, children }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;