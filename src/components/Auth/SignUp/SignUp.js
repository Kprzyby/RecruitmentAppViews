import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SignUp.module.css';
import {Container, Form, FormGroup, FormLabel, FormControl, Row, Col, Button} from 'react-bootstrap'
import {MDBIcon} from 'mdb-react-ui-kit'

const SignUp = () => {
  const [buttonClicked, setButtonClicked]=useState(false);

  return(
    <div>
      {buttonClicked===false?(
      <Container className="text-center">
      <Form>
        <Row>
          <Col sm={12} md={6}>
            <FormGroup className="mb-3" controlId="UserName">
              <FormLabel>Username</FormLabel>
              <FormControl type='text' placeholder='Your username'></FormControl>
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <FormGroup className="mb-3" controlId="Email">
              <FormLabel>Email</FormLabel>
              <FormControl type='email' placeholder='Your email'></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <FormGroup className="mb-3" controlId="Password">
              <FormLabel>Password</FormLabel>
              <FormControl type='password' placeholder='Password'></FormControl>
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <FormGroup className="mb-3" controlId="RepeatPassword">
              <FormLabel>Repeat password</FormLabel>
              <FormControl type='password' placeholder='Repeat password'></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="rounded" type="submit" onClick={e=>{
              e.preventDefault();
              setButtonClicked(true);
            }} variant="primary">Sign up</Button>
          </Col>
        </Row>
      </Form>
    </Container>)
    :(
        <div className="text-center">
          <MDBIcon style={{color:"green"}} icon='check-circle' size='5x'></MDBIcon><br></br>
          <h3 className="mt-3">Account created successfully. Please check your email to verify your account</h3>
        </div>)}

    </div>
  )
};

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
