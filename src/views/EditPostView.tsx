import React from 'react'
import { Container, Form } from 'react-bootstrap'
import CustomButton from '../components/CustomButton'

const EditPostView = () => {
  return (
    <Container>
      <h2 className="title">Edit Post</h2>
      <Form style={{ marginTop: '40px' }}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control style={{ marginBottom: '20px' }} type="text" />
          <Form.Label>Description</Form.Label>
          <Form.Control style={{ marginBottom: '20px' }} type="text" />
          <Form.Label>Tags</Form.Label>
          <Form.Control style={{ marginBottom: '20px' }} type="text" />
        </Form.Group>
        <CustomButton title="Update Post" />
      </Form>
    </Container>
  )
}

export default EditPostView
