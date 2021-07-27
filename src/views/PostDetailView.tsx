import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Post } from '../interfaces/Post';
import { RootState } from '../state';
import { getSinglePost } from '../state/action-creators'

const PostDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams<{id: string}>();
  const singleData = useSelector((state: RootState) => state.posts.data )
  // let post = singleData ? singleData[0] : null;

  useEffect(() => {
    console.log(id);
    // dispatch(getSinglePost(id))
  }, [id])

  return (
    <div>
      {/* <h2>{post?.title}</h2>
      <p>{post?.description}</p>
      {JSON.stringify(singleData)} */}
    </div>
  )
}

export default PostDetail
