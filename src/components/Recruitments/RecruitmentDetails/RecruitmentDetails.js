import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecruitmentDetails.module.css';
import { Card, ListGroup, ListGroupItem, Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import { Rating } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const RecruitmentDetails = (props) => {
  const location = useLocation()

  return (
    <Card bg="primary" text="light">
      <Card.Header className='text-center'><b>{location.state.position}&nbsp; &#40;{location.state.seniority}&#41;</b></Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item className="text-center">
            <Row>
              <Col xs={5} sm={5} lg={3}>
                <Link className="rounded btn btn-primary" to={"/Candidate/Create"}>
                  <MDBIcon fas icon="file-signature" size="md" />&nbsp;
                  Apply
                </Link>
              </Col>
              <Col xs={5} sm={5} lg={3}>
                <Link to={"/Candidates"} className="rounded btn btn-info">
                  <MDBIcon fas icon="users" size="md" />&nbsp;
                  Candidates
                </Link>
              </Col>
              <Col xs={5} sm={5} lg={3}>
                <Link className="rounded btn btn-success" to={"/Recruitments/Edit"} state={{
                  position: location.state.position,
                  beginningDate:location.state.beginningDate,
                  endingDate:location.state.endingDate,
                  seniority:location.state.seniority,
                  location:location.state.location,
                  skillsUsed:location.state.skills}}>
                  <MDBIcon far icon="edit" size="md" />&nbsp;
                  Edit
                </Link>
              </Col>
              <Col xs={5} sm={5} lg={3}>
                <Button className="rounded" variant="danger" size="md">
                  <MDBIcon fas icon="trash" size="md" />&nbsp;
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Title>Location</Card.Title>
            <Card.Text>{location.state.location}</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Title>Beginning date</Card.Title>
            <Card.Text>{location.state.beginningDate}</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Title>Ending date</Card.Title>
            <Card.Text>{location.state.endingDate}</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Title>Required skills</Card.Title>
            <ListGroup as="ul">
              {location.state.skills.map(e => <ListGroup.Item
                as="li"
                key={e.id}>
                <span>{e.name}</span>&nbsp;
                <Rating value={e.proficiency}></Rating>
              </ListGroup.Item>)}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
};

RecruitmentDetails.propTypes = {
};

RecruitmentDetails.defaultProps = {};

export default RecruitmentDetails;
