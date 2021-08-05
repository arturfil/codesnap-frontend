import React from 'react'
import LinkButton from './LinkButton'

interface Props {
  title: string,
  description: string,
  tags: string[],
  id: string
}

const PostDetailBody = ({ title, description, tags, id }: Props) => {
  return (
    <div>
      <div className="container view post">
        <h2 style={{ fontWeight: 'bold', marginTop: '40px' }}>{title}</h2>

        <h4 className="description">{description}</h4>
        <p className="tags">
          {tags.length > 0 ? tags.map((t, i) => (
            <span key={i}>#{t} </span>
          )) : (
            <span>Loading</span>
          )}
        </p>
        <LinkButton title="Edit Post" url={`/editPost/${id}`} />
      </div>
    </div>
  )
}

export default PostDetailBody
