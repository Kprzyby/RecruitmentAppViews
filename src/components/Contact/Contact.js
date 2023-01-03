import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import {Form, FormGroup, FormLabel, FormControl, Button} from "react-bootstrap"

const Contact = () => (
<div className="d-flex justify-content-center align-items-center">
    <Form className="mt-3">
      <FormGroup className="mb-3" controlId="Email">
        <FormLabel>Email</FormLabel>
        <FormControl type='email' placeholder='Your email'></FormControl>
      </FormGroup>
      <FormGroup className="mb-3" controlId="Message">
        <FormLabel>Message</FormLabel>
        <FormControl as='textarea' placeholder='Your message'></FormControl>
      </FormGroup>
      
      <Button className="rounded" variant="primary" type="submit" style={{width:"100%"}}>Send</Button>
    </Form>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
