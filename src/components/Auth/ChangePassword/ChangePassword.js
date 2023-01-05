import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChangePassword.module.css';
import { Container, Row, Col, Button, FormGroup, FormLabel, Form, FormControl } from 'react-bootstrap'

const ChangePassword = () => (
  <Container className="text-center" style={{ width: "70%" }}>
    <Form className="mt-3">
      <Row>
        <FormGroup className="mb-3" controlId='oldPassword'>
          <FormLabel>Old password</FormLabel>
          <FormControl type="password"></FormControl>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup className="mb-3" controlId='newPassword'>
          <FormLabel>New password</FormLabel>
          <FormControl type="password"></FormControl>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup className="mb-3" controlId='repeatPassword'>
          <FormLabel>Repeat password</FormLabel>
          <FormControl type='password'></FormControl>
        </FormGroup>
      </Row>
      <Col lg={12} md={12} sm={10} className="text-center">
        <Button varaint="primary" size="md" className="rounded">Change the password</Button>
      </Col>
    </Form>

  </Container>
);

ChangePassword.propTypes = {};

ChangePassword.defaultProps = {};

export default ChangePassword;
