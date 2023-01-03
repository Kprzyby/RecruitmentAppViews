import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditCandidate.module.css';
import {Form, FormGroup, FormControl, FormLabel, Col, Row, Card, Button} from 'react-bootstrap'

const stages=[
  "New",
  "HR interview",
  "Tech interview",
  "Dropped out",
  "Hired"
]

const EditCandidate = (props) => (
  <Form>
    <Row>
      <Card.Header className="mb-3">Personal information</Card.Header>
      <Col lg={6} md={6} sm={12} className="mb-3">
        <FormGroup className="mb-3" controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl type='text' placeholder='Kacper' defaultValue={props.name}></FormControl>
        </FormGroup>
      </Col>
      <Col lg={6} md={6} sm={12} className="mb-3">
        <FormGroup className="mb-3" controlId="surname">
          <FormLabel>Surname</FormLabel>
          <FormControl type='text' placeholder='Kowalski' defaultValue={props.surname}></FormControl>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Card.Header className="mb-3">Contact information</Card.Header>
      <Col lg={6} md={6} sm={12} className="mb-3">
        <FormGroup className="mb-3" controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl type='text' placeholder='Kacperkowalski1@wp.pl' defaultValue={props.email}></FormControl>
        </FormGroup>
      </Col>
      <Col lg={6} md={6} sm={12} className="mb-3">
        <FormGroup className="mb-3" controlId="phoneNumber">
          <FormLabel>Phone number</FormLabel>
          <FormControl type='text' placeholder='123456789' defaultValue={props.phoneNumber}></FormControl>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Card.Header className="mb-3">Recruitment process</Card.Header>
      <Col lg={12} md={12} sm={12} className="mb-3">
        <FormGroup className="mb-3" controlId="stage">
          <FormLabel>Stage</FormLabel>
          <Form.Select defaultValue={props.stage}>
            {stages.map((e, index)=><option key={index} value={e}>{e}</option>)}
          </Form.Select>
        </FormGroup>
      </Col>
    </Row>
    <Col>
      <Button className="rounded" variant="primary" style={{ width: "50%" }}>Save changes</Button>
    </Col>
  </Form>
);

EditCandidate.propTypes = { 
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  stage: PropTypes.string
};

EditCandidate.defaultProps = {};

export default EditCandidate;
