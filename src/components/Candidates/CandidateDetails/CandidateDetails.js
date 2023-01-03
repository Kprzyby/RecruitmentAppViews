import React from 'react';
import PropTypes from 'prop-types';
import styles from './CandidateDetails.module.css';
import { Card, Tabs, Tab, Container, Row, Col } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';

const CandidateDetails = (props) => (
  <Container className="text-center">
    <Card>
      <Card.Body>
        <Tabs defaultActiveKey="Details" justify>
          <Tab eventKey="Details" title="Details" style={{ textAlign: "left" }}>
            <Row>
              <Card.Header className="mb-3">Personal information</Card.Header>
              <Col lg={6} md={6} sm={12} className="mb-3">
                <Card.Title>Name</Card.Title>
                <Card.Text>{props.name}</Card.Text>
              </Col>
              <Col lg={6} md={6} sm={12} className="mb-3">
                <Card.Title>Surname</Card.Title>
                <Card.Text>{props.surname}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Card.Header className="mb-3">Contact information</Card.Header>
              <Col lg={6} md={6} sm={12} className="mb-3">
                <Card.Title>Email</Card.Title>
                <Card.Text>{props.email}</Card.Text>
              </Col>
              <Col lg={6} md={6} sm={12} className="mb-3">
                <Card.Title>Phone number</Card.Title>
                <Card.Text>{props.phoneNumber}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Card.Header className="mb-3">Recruitment process</Card.Header>
              <Col lg={12} md={12} sm={12} className="mb-3">
                <Card.Title>Stage</Card.Title>
                <Card.Text>{props.stage}</Card.Text>
              </Col>
              <Col lg={6} md={6} sm={12} className="mb-3">
                <Card.Title>HR interview date</Card.Title>
                <Card.Text>
                  {props.HRInterviewDate?
                  props.HRInterviewDate
                  :"Unscheduled"}
                </Card.Text>
              </Col>
              <Col lg={6} md={6} sm={12} className="mb-3">
                <Card.Title>Tech interview date</Card.Title>
                <Card.Text>
                  {props.TechInterviewDate?
                  props.TechInterviewDate
                  :"Unscheduled"}
                </Card.Text>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Edit" title="Edit">b</Tab>
          <Tab eventKey="Manage" title="Manage">c</Tab>
        </Tabs>
      </Card.Body>
    </Card>
  </Container>
);

CandidateDetails.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  stage: PropTypes.string,
  HRInterviewDate: PropTypes.string,
  TechInterviewDate: PropTypes.string
};

CandidateDetails.defaultProps = {};

export default CandidateDetails;
