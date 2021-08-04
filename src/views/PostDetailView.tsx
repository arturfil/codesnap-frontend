import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import LinkButton from '../components/LinkButton';

const PostDetail = () => {
  // const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
  
  }, [])

  // function to separate tags from strings to array of strings
  /* ***const separateTags = async (tagsStr: string): Promise<string[] | void> => {
    // if (singleData?.tags === null) return;
    let tagArr: string[] = [];
    // get rid off all white spaces    
    tagsStr = tagsStr.replace(/ /g, '');
    // separate them by commas delimiter
    tagArr = tagsStr.split(',')
    setTags(tagArr);
  }
  *** */

  return (
    <>
      <Container>
      <h2 style={{fontWeight: 'bold', marginTop: '40px'}}>singleData</h2>
        <Row>
          <Col>
            <div className="container view post">
              <h2>Tags</h2>
              <p className="tags">
                {tags.length > 0 ? tags.map((t, i) => (
                  <span key={i}>#{t} </span>
                )) : (
                  <span>Loading</span>
                )}
              </p>
            </div>
          </Col>
          <Col lg={9}>
            <div className="container view post">
              <h4 className="description">Description</h4>
              <p className="tags">
                {tags.length > 0 ? tags.map((t, i) => (
                  <span key={i}>#{t} </span>
                )) : (
                  <span>Loading</span>
                )}
              </p>
              <LinkButton title="Edit Post" url={`/editPost/${id}`} />
            </div>
          </Col>
          <Row>
            <Col lg={3} />
            <Col lg={9}>
              <div className="post view">
                <h2>Comments</h2>
                <hr/>
                <p className="comments">I don't understand why you don't have a return inside the function, or braces - <span className="user">German</span></p>
                <hr/>
                <Form>
                  <Form.Group>
                    <Form.Label style={{fontWeight: 700}}>Add your comment</Form.Label>
                    <Form.Control type="text" style={{marginBottom: '20px'}}/>
                  <CustomButton title="Submit Comment" />
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>

        </Row>
      </Container>
    </>
  )
}

export default PostDetail
