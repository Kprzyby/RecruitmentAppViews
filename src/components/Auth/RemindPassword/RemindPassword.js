import React from 'react';
import PropTypes from 'prop-types';
import styles from './RemindPassword.module.css';
import { Form, FormGroup, Button, FormControl } from 'react-bootstrap';

const RemindPassword = () => (
  <div className="d-flex justify-content-center align-items-center">
    <Form className="mt-3">
      <FormGroup className="mb-3" controlId="Email">
        <Form.Text>
          Please enter your email and we will send you a password reset link.
        </Form.Text>
        <FormControl type='email' placeholder='Your email'></FormControl>
      </FormGroup>
      
      <Button className="rounded" variant="primary" type="submit" style={{width:"100%"}}>Send password reset email</Button>
    </Form>
  </div>
);

RemindPassword.propTypes = {};

RemindPassword.defaultProps = {};

export default RemindPassword;
