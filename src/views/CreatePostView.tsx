import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../components/CustomButton'
import { createPostAction } from '../state/action-methods/postMethods';
import { v4 as uuid } from 'uuid';
import DatePicker from 'react-datepicker';

const CreatePostView = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [post, setPost] = useState({
    id: uuid(),
    title: '',
    description: '',
    tags: '',
    date: new Date()
  })

  const createPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPost({
      ...post,
      date: new Date(post.date)
    })
    dispatch(createPostAction(post));
    history.push('/');
  }

  const handleChange = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
    if (name === 'date') {
      setPost({
        ...post,
        date: new Date(e.target.value)
      })
      return;
    }
    setPost({
      ...post,
      [name]: e.target.value
    })
  }

  return (
    <div className="container view">
      <h2 className="title">Create Post</h2>
      <Form onSubmit={(e) => createPost(e)} style={{ marginTop: '40px' }}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          {/* // PLEASE REMEMBER THE NAME DOES NOT COME FROM PROP NAME! */}
          <Form.Control
            onChange={handleChange('title')}
            value={post.title}
            name="title"
            style={{ marginBottom: '20px' }}
            type="text"
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleChange('description')}
            value={post.description}
            name="description"
            style={{ marginBottom: '20px' }}
            as="textarea" rows={5}
          />
          <Form.Label>Tags, [Separate tags with commas]</Form.Label>
          <Form.Control
            onChange={handleChange('tags')}
            value={post.tags}
            name="tags"
            style={{ marginBottom: '20px' }}
            type="text"
          />
          <Form.Label>Date</Form.Label>
          {/* Check how to set dates */}
          <br />
          <DatePicker
            name="date"
            className="form-control"
            value={(post.date).toLocaleDateString().toString()}
            onChange={(date) => handleChange('date')}
          />
          <br />
        </Form.Group>
        <CustomButton
          buttonStyles={{ marginBottom: '20px', marginTop: '20px' }}
          title="Create Post"
        />
      </Form>
    </div>
  )
}

export default CreatePostView
