import React from 'react'
import { Form } from 'react-bootstrap'
import CustomButton from './CustomButton'

const CommentSection = () => {
  return (
    <div className="post view">
      <h2>Comments</h2>
      <hr />
      <p className="comments">I don't understand why you don't have a return inside the function, or braces - <span className="user">German</span></p>
      <hr />
      <Form>
        <Form.Group>
          <Form.Label style={{ fontWeight: 700 }}>Add your comment</Form.Label>
          <Form.Control type="text" style={{ marginBottom: '20px' }} />
          <CustomButton title="Submit Comment" />
        </Form.Group>
      </Form>
    </div>
  )
}

export default CommentSection
