import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recruitment.module.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Recruitment = (props) => {
  const timeLeft = Math.floor((Date.parse(props.endingDate) - Date.now()) / (1000 * 60 * 60 * 24));
  const toDetails = { 
    pathname: "/RecruitmentDetails", 
  };

  return(
    <Card bg="info" text="light">
      <Card.Header>{timeLeft} d left</Card.Header>
      <Card.Body>
        <Card.Title>{props.position} &nbsp; &#40;{props.seniority}&#41;</Card.Title>
        <Card.Text>Location - {props.location}</Card.Text>
      </Card.Body>
      <div className="text-center">
        <Link className="btn btn-light rounded" to={"/RecruitmentDetails"} state={{
          position: props.position,
          beginningDate:props.beginningDate,
          endingDate:props.endingDate,
          seniority:props.seniority,
          location:props.location,
          skills:props.skills}}>
        Details</Link>
      </div>
    </Card>
  )
};

Recruitment.propTypes = {
  beginningDate:PropTypes.string,
  endingDate:PropTypes.string,
  position:PropTypes.string,
  seniority:PropTypes.string,
  location:PropTypes.string,
  skills:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    name:PropTypes.string,
    proficiency:PropTypes.number
  }))
};

Recruitment.defaultProps = {};

export default Recruitment;
