import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
// import { useForm } from '../hooks/useForm'

const EditPostView = () => {
  // const dispatch = useDispatch();
  // const { id } = useParams<{id: string}>();
  // const {title, description, tags, changing, setFormValue} = useForm({
  //   title: '', 
  //   description: '',
  //   tags: '', 
  // })

  useEffect(() => {
  }, [])

  return (
    <Container>
      <h2 className="title">Edit Post</h2>
      <Form style={{ marginTop: '40px' }}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            style={{ marginBottom: '20px' }}
            type="text" />
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            style={{ marginBottom: '20px' }}
            type="text" />
          <Form.Label>Tags</Form.Label>
          <Form.Control
            name="tags"
            style={{ marginBottom: '20px' }}
            type="text" />
            <Form.Label>Date</Form.Label>
          <Form.Control
            name="tags"
            style={{ marginBottom: '20px' }}
            type="date" />
        </Form.Group>
        <CustomButton title="Update Post" />
      </Form>
    </Container>
  )
}

export default EditPostView
