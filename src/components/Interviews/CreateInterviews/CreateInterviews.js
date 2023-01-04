import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateInterviews.module.css';
import { Form, Row, Col, Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const CreateInterviews = () => (
  <Form>
    <Row className="mt-3">
      <Col lg={6} md={6} sm={12} className="mb-3">
        <FormGroup className="mb-3" controlId="HRInterview">
          <FormLabel>Schedule a HR interview</FormLabel>
          <FormControl type='date'></FormControl>
        </FormGroup>
      </Col>
      <Col lg={6} md={6} sm={12} className="mb-3">
        <FormGroup className="mb-3" controlId="TechInterview">
          <FormLabel>Schedule a Tech interview</FormLabel>
          <FormControl type='date'></FormControl>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col lg={12} sm={12}>
        <Button className="rounded" variant="primary">Save changes</Button>
      </Col>
    </Row>
  </Form>
);

CreateInterviews.propTypes = {};

CreateInterviews.defaultProps = {};

export default CreateInterviews;
