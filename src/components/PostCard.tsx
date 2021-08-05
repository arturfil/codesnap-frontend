import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from './CustomButton'

interface Props {
  id: string,
  title: string,
  description: string
}

const PostCard = ({ title, description, id }: Props) => {
  const history = useHistory();
  
  const redirectToDetails = () => {
    history.push(`/posts/${id}`);
  }
  
  return (
    <div className="postCard col-lg-4">
      <h2>{title}</h2>
      <p>{description}</p>
      <CustomButton title="View" func={() => redirectToDetails()}/>
    </div>
  )
}

export default PostCard
