import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import { useForm } from '../hooks/useForm'
import { RootState } from '../state'
import { getSinglePost } from '../state/action-creators'

const EditPostView = () => {
  const singleData = useSelector((state: RootState) => state.singlePost.post)
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();
  const {title, description, tags, changing, setFormValue} = useForm({
    title: '', 
    description: '',
    tags: '', 
  })


  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [])

  const loadPost = async () => {
    // setFormValue({

    // })
  }

  return (
    <Container>
      <h2 className="title">Edit Post</h2>
      <Form style={{ marginTop: '40px' }}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={singleData?.title}
            name="title"
            style={{ marginBottom: '20px' }}
            type="text" />
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={singleData?.description}
            name="description"
            style={{ marginBottom: '20px' }}
            type="text" />
          <Form.Label>Tags</Form.Label>
          <Form.Control
            value={singleData?.tags}
            name="tags"
            style={{ marginBottom: '20px' }}
            type="text" />
            <Form.Label>Date</Form.Label>
          <Form.Control
            value={singleData?.date.toString()}
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
