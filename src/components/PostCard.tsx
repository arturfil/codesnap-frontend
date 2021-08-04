import React from 'react'
import LinkButton from './LinkButton'

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
      <LinkButton url={`/posts/${id}`} title="Check Post"/>
    </div>
  )
}

export default PostCard
