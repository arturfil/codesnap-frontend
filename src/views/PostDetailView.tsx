import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import CustomButton from '../components/CustomButton';
import LinkButton from '../components/LinkButton';
import PostDetailBody from '../components/PostDetailBody';
import { getSinglePostAction } from '../state/action-methods/postMethods';
import { RootState } from '../state/store';

const PostDetailView = () => {
  const dispatch = useDispatch();
  const { title, tags, description } = useSelector((state: RootState) => state.posts.singlePost);
  const { id } = useParams<{ id: string }>();
  const [sepTags, setTags] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getSinglePostAction(id));
    separateTags(tags)
  }, [dispatch, tags])

  // function to separate tags from strings to array of strings
  const separateTags = async (tagsStr: string): Promise<string[] | void> => {
    if (tagsStr === undefined) return;
    let tagArr: string[] = [];
    // get rid off all white spaces    
    tagsStr = tagsStr.replace(/ /g, '');
    // separate them by commas delimiter
    tagArr = tagsStr.split(',')
    setTags(tagArr);
  }

  const TagsBox = () => (
    <div className="container view post">
      <h2>{tags}</h2>
      <div className="tags">
        {sepTags.length > 0 ? sepTags.map((t, i) => (
          <div key={i}>
            <span >#{t} </span>
          </div>
        )) : (
          <span>Loading</span>
        )}
      </div>
    </div>
  )

  return (
    <>
      <Container>
        <Row>
          <Col>
            <TagsBox />
          </Col>
          <Col lg={9}>
            <PostDetailBody 
              title={title} 
              description={description} 
              tags={sepTags} 
              id={id} 
            />
          </Col>
          <Row>
            <Col />
            <Col lg={9}>
              <CommentSection />
            </Col>
          </Row>

        </Row>
      </Container>
    </>
  )
}

export default PostDetailView
