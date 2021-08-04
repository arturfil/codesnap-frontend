import React from 'react'

interface Props {
  title: string;
  func?: Function
}

const CustomButton = ({title, func}: Props) => {
  return (
    <>
      <button onClick={() => func ? func() : null} className="btn btn-success customBtn">
        {title}
      </button>
    </>
  )
}

export default CustomButton
  