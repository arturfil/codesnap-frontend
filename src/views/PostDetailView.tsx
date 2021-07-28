import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Post } from '../interfaces/Post';
import { RootState } from '../state';
import { getSinglePost } from '../state/action-creators'

const PostDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams<{id: string}>();
  const singleData = useSelector((state: RootState) => state.singlePost.post)
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getSinglePost(id))
    if (singleData !== null)
      separateTags(singleData.tags);
  }, [id])

  // function to separate tags from strings to array of strings
  const separateTags = (tagsStr: string): string[] | void => {
    if (singleData?.tags === null) return; 
    let tagArr:string[] = [];
    // get rid off all white spaces    
    tagsStr = tagsStr.replace(/ /g, ''); 
    // separate them by commas
    tagArr = tagsStr.split(',') 
    setTags(tagArr);
  }

  return (
    <div className="container view post">
      <h2 >{singleData?.title}</h2>
      <h4 className="description">{singleData?.description}</h4>
      <p>
      { tags && tags.map((t, i) => (
        <span key={i}>#{t} </span>
      ))}
      </p>
    </div>
  )
}

export default PostDetail
