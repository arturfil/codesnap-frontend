import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  id?: string;
  url: string;
  title: string;
}

const LinkButton = ({title, id, url}: Props) => {
  return (
    <>
      <button className="btn btn-success customBtn">
        <Link className="btnLink" to={url}>
          {title}
        </Link>
      </button> 
    </>
  )
}

export default LinkButton
