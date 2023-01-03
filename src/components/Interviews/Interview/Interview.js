import React from 'react';
import PropTypes from 'prop-types';
import styles from './Interview.module.css';
import { Card, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import {MDBIcon} from 'mdb-react-ui-kit'

const Interview = (props) => (
  <Card bg="info">
    <Card.Header>
      <span>{props.interviewType}</span>
      <div style={{float:"right"}}>
        <Button className='rounded' size="md" variant="success">
          <MDBIcon far icon="edit" size="lg"/>
        </Button>
        <Button className='rounded' size="md" variant="danger">
          <MDBIcon fas icon="trash" size="lg"/>
        </Button>
      </div>
      </Card.Header>
    <Card.Body>
      <Card.Title>Interviewed</Card.Title>
      <Card.Text>{props.interviewedName} {props.interviewedSurname}</Card.Text>
      <Card.Title>Interview date</Card.Title>
      <Card.Text>{props.interviewDate}</Card.Text>
    </Card.Body>
  </Card>
);

Interview.propTypes = {
  interviewType:PropTypes.string,
  interviewedName:PropTypes.string,
  interviewedSurname:PropTypes.string,
  interviewDate:PropTypes.string
};

Interview.defaultProps = {};

export default Interview;
