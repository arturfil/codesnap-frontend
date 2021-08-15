import React, { FormEvent, Fragment, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import { RootState } from '../state/store';
import { useForm } from '../hooks/useForm'
import { getSinglePostAction, updatePostAction } from '../state/action-methods/postMethods';
import CustomSpinner from '../components/CustomSpinner';
import DatePicker from 'react-datepicker'

const EditPostView = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { singlePost: post, loading } = useSelector((state: RootState) => state.posts);
  const { formId, formTitle, formDescription, formTags, formDate, changing, setFormValue, form } = useForm({
    formId: '',
    formTitle: '',
    formDescription: '',
    formTags: '',
    formDate: ''
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
      formId: id,
      formTitle: post.title,
      formDescription: post.description,
      formTags: post.tags,
      formDate: (post.date).toLocaleString().toString()
    })
  }

  // e: FormEvent<HTMLInputElement>
  const updatePost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let postToUpdate = {
      id: formId,
      title: formTitle,
      description: formDescription,
      tags: formTags,
      date: post.date
    }

    dispatch(updatePostAction(postToUpdate));
    history.push('')
  }

  return (
    <Container>
      <h2 className="title">Edit Post</h2>
      {loading ? (
        <CustomSpinner />
      ) : (
        <Form onSubmit={(e) => updatePost(e)} style={{ marginTop: '40px' }}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            {/* // PLEASE REMEMBER THE NAME PASSED TO THE ONCHANGE PROP, DOES NOT COME FROM PROP NAME! */}
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
              <>
              <br />
              <DatePicker 
                className="form-control"
                // value={formDate}
                value={new Date(formDate).toLocaleString().toString()}
                onChange={() =>  changing('formDate')}                
              />
              </>
            ) : (
              <CustomSpinner/>
            )}
          </Form.Group>
          <CustomButton
            buttonStyles={{ marginBottom: '20px', marginTop: '20px'}}
            title="Update Post"
          />
        </Form>
      )}
    </Container>
  )
}

export default EditPostView
