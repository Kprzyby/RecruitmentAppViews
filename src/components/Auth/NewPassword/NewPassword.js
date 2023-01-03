import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewPassword.module.css';
import {Form, FormGroup, FormLabel, FormControl, Button} from "react-bootstrap"

const NewPassword = () => (
  <div className="d-flex justify-content-center align-items-center">
    <Form className="mt-3">
      <FormGroup className="mb-3" controlId="Password">
        <FormLabel>New password</FormLabel>
        <FormControl type='password' placeholder='New password'></FormControl>
      </FormGroup>
      <FormGroup className="mb-3" controlId="Repeat password">
        <FormLabel>Repeat password</FormLabel>
        <FormControl type='password' placeholder='Repeat password'></FormControl>
      </FormGroup>

      <Button className="rounded" variant="primary" style={{width:"100%"}}>Reset password</Button>
    </Form>
  </div>
);

NewPassword.propTypes = {};

NewPassword.defaultProps = {};

export default NewPassword;
