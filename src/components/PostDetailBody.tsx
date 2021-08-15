import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deletePostAction } from '../state/action-methods/postMethods'
import CustomButton from './CustomButton'
import LinkButton from './LinkButton'

interface Props {
  detailFunc?: Function
  title: string,
  description: string,
  tags: string[],
  id: string
}

const PostDetailBody = ({ title, description, tags, id, detailFunc }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const deletePost = async(): Promise<void> => {
    dispatch(deletePostAction(id));
    history.push('');
  }

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
        <CustomButton 
          title="Delete Button" 
          func={deletePost} 
          buttonStyles={{ marginLeft: '10px', backgroundColor: 'red' }} 
        />
      </div>
    </div>
  )
}

export default PostDetailBody;
