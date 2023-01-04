import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserProfile.module.css';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap'

const UserProfile = () => (
  <Container>
    <Card className="p-2">
      <Card.Body>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Image src={process.env.PUBLIC_URL + '/images/avatar.png'} fluid rounded></Image>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Card.Title className="mt-2">Name</Card.Title>
            <Card.Text>Kacper</Card.Text>

            <Card.Title>Surname</Card.Title>
            <Card.Text>Kowalski</Card.Text>

            <Card.Title>Email</Card.Title>
            <Card.Text>Kacperkowalski1@wp.pl</Card.Text>

            <Card.Title>Role</Card.Title>
            <Card.Text>Recruiter</Card.Text>
          </Col>
        </Row>
        <Row className="mt-3">
          <div className="text-center">
          <Button variant="primary" className="rounded" size="lg">Change password</Button>
          </div>
        </Row>
      </Card.Body>

    </Card>
  </Container>
);

UserProfile.propTypes = {};

UserProfile.defaultProps = {};

export default UserProfile;
