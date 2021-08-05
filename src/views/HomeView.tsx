import React, { Fragment, useEffect } from 'react'
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard';
import { RootState } from '../state/store'
import { getPostsAction } from '../state/action-methods/postMethods';

const HomeView = () => {
  const {data: posts, loading, error} = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch])

  return (
    <Container style={{ marginTop: '40px' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Home View</h2>
      { error && <Alert variant="danger">{error}</Alert>}
      <Row className="justify-content-md-center">
        {loading && (
          <div className="text-center">
            <Spinner style={{marginTop: '40px', height: '80px', width: '80px'}} animation="border" role="status" />
            <h4>Loading ...</h4>
          </div>
        )}
        {posts ? posts.map((p, i) => (
          <Fragment key={p.id}>
            <Col style={{ display: 'flex', alignItems: 'center' }}>
              <PostCard id={p.id} title={p.title} description={p.description} />
            </Col>
          </Fragment>
        )) : (
          <h2>No current Posts</h2>
        )}
      </Row>
    </Container>
  )
}

export default HomeView
