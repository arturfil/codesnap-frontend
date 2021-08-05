import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import { RootState } from '../state/store';
import { useForm } from '../hooks/useForm'
import { getSinglePostAction } from '../state/action-methods/postMethods';
import CustomSpinner from '../components/CustomSpinner';

const EditPostView = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const {singlePost: post, loading} = useSelector((state: RootState) => state.posts);
  const { formTitle, formDescription, formTags, changing, setFormValue, formDate } = useForm({
    formTitle: '',
    formDescription: '',
    formTags: '',
    formDate: new Date()
  })

  // this is in case you want to refresh and not loose the state
  useEffect(() => {
    dispatch(getSinglePostAction(id))
  }, [dispatch, id])

  useEffect(() => {
    setValues();
  }, [post]);
  
  const setValues = async () => {
    if (!post) return;
    setFormValue({
      formTitle: post.title,
      formDescription: post.description,
      formTags: post.tags,
      formDate: post.date
    })
  }

  const updatePost = () => {
    // dispatch(upda)
  }

  return (
    <Container>
      <h2 className="title">Edit Post</h2>
      { loading ? (
        <CustomSpinner/>
      ) : (
        <Form style={{ marginTop: '40px' }}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            {/* // PLEASE REMEMBER THE NAME DOES NOT COME FROM PROP NAME! */}
            <Form.Control
              onChange={changing('formTitle')}
              value={formTitle}
              name="title"
              style={{ marginBottom: '20px' }}
              type="text" 
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={changing('formDescription')}
              value={formDescription}
              name="description"
              style={{ marginBottom: '20px' }}
              as="textarea" rows={5} 
            />
            <Form.Label>Tags</Form.Label>
            <Form.Control
              onChange={changing('formTags')}
              value={formTags}
              name="tags"
              style={{ marginBottom: '20px' }}
              type="text" 
            />
            <Form.Label>Date</Form.Label>
            {/* Check how to set dates */}
            { formDate ? (
              <Form.Control 
                onChange={changing('formDate')}
                value={formDate.toString()}
                name="date"
                type="text"
                style={{ marginBottom: '20px' }}
              />
            ) : (
              <CustomSpinner/>
            )}
          </Form.Group>
          <CustomButton title="Update Post" func={() => console.log("Test")}/>
        </Form>
      )}
    </Container>
  )
}

export default EditPostView
