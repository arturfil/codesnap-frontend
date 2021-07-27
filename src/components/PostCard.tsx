import React from 'react'
import CustomButton from './CustomButton'

interface Props {
  id: string,
  title: string,
  description: string
}

const PostCard = ({ title, description, id }: Props) => {
  return (
    <div className="postCard col-lg-4">
      <h2>{title}</h2>
      <p>{description}</p>
      <CustomButton id={id} title="Check Post"/>
    </div>
  )
}

export default PostCard
