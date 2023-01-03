import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateCandidate.module.css';
import {Container, Row, Col, Button, Form, FormGroup, FormLabel, FormControl} from "react-bootstrap"

const CreateCandidate = () => (
  <div className={styles.CreateCandidate}>

    <Container className="text-center">
        <Form className="mt-3">
          <Row>
            <Col sm={12} lg={6}>
              <FormGroup className="mb-3" controlId="Name">
                <FormLabel>Name</FormLabel>
                <FormControl type='text' placeholder='Kacper'></FormControl>
              </FormGroup>
            </Col>
            <Col sm={12} lg={6}>
              <FormGroup className="mb-3" controlId="Surname">
                <FormLabel>Surname</FormLabel>
                <FormControl type='text' placeholder='Kowalski'></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6}>
              <FormGroup className="mb-3" controlId="Email">
                <FormLabel>Email</FormLabel>
                <FormControl type='email' placeholder='Kacperkowalski1@wp.pl'></FormControl>
              </FormGroup>
            </Col>
            <Col sm={12} lg={6}>
              <FormGroup className="mb-3" controlId="phoneNumber">
                <FormLabel>Phone number</FormLabel>
                <FormControl type='text' placeholder='123 456 789'></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={12}>
              <FormGroup className="mb-3" controlId="CV">
                <FormLabel>CV</FormLabel>
                <FormControl type='file'></FormControl>
              </FormGroup>
            </Col>
          </Row>
          </Form>
          <Button className="rounded" style={{ width: "50%" }}>Apply</Button>
          </Container>
  </div>
);

CreateCandidate.propTypes = {};

CreateCandidate.defaultProps = {};

export default CreateCandidate;
