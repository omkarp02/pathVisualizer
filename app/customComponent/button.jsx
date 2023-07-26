import React from 'react'

const Button = ({text, size='md', ...otherProps}) => {
  return (
    <button className={`btn btn-primary btn-${size}`}  {...otherProps} >
      {text}
    </button>
  )
}

export default Button
