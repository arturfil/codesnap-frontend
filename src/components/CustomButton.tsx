import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  id?: string;
  title: string;
}

const CustomButton = ({title, id}: Props) => {
  return (
    <>
      <button className="btn btn-success customBtn">
        <Link className="btnLink" to={`posts/${id}`}>
          {title}
        </Link>
      </button>
    </>
  )
}

export default CustomButton
  