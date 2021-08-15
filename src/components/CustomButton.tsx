import React, { CSSProperties } from 'react'

interface Props {
  title: string;
  func?: Function
  buttonStyles?: CSSProperties
}

const CustomButton = ({title, func, buttonStyles}: Props) => {
  return (
    <>
      <button 
        onClick={() => func ? func() : null} 
        style={buttonStyles} 
        className="btn btn-success customBtn">
        {title}
      </button>
    </>
  )
}

export default CustomButton
  