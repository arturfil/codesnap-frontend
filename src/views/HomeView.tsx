import React, { Fragment, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard';
import { RootState } from '../state'
import { getForecasts, getPots } from '../state/action-creators';

const HomeView = () => {
  const forecastData = useSelector((state: RootState) => state.forecasts.forecasts);
  const postsData = useSelector((state: RootState) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPots());
  }, [dispatch])

  return (
    <Container style={{ marginTop: '40px' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Home View</h2>
      <Row className="justify-content-md-center">
        {postsData ? postsData.map((p, i) => (
          <Fragment key={p.id}>  
            <Col lg={4} >
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
