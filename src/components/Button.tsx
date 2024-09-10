import React from 'react'
import '../styles/globals.css'

const Button = ({ children, ...props }: React.PropsWithChildren) => {
  return <button {...props}>{children}</button>
}

export default Button
