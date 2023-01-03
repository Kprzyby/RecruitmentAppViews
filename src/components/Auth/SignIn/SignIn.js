import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignIn.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, FormLabel, Form, FormGroup, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const SignIn = () => (
  <div className="d-flex justify-content-center align-items-center">
    <Form className="mt-3">
      <FormGroup className="mb-3" controlId="Email">
        <FormLabel>Email</FormLabel>
        <FormControl type='email' placeholder='Your email'></FormControl>
      </FormGroup>
      <FormGroup className="mb-3" controlId="Password">
        <FormLabel>Password</FormLabel>
        <FormControl type='password' placeholder='Your password'></FormControl>
        <Form.Text >
          <Link to={"/RemindPassword"}>Forgot password?</Link>
        </Form.Text>
      </FormGroup>
      
      <Button className="rounded" variant="primary" type="submit" style={{width:"100%"}}>Log in</Button>

    <div className="mt-3">
      <Link to={"/SignUp"} className="text-center">Don't have an account? Create one now!</Link>
    </div>

    </Form>
  </div>
);

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
