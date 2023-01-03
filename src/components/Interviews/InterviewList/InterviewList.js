import React from 'react';
import PropTypes from 'prop-types';
import styles from './InterviewList.module.css';
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import Interview from '../Interview/Interview';

const interiviews = [
  {
    id:0,
    interviewType:"HR interview",
    interviewedName:"Doom",
    interviewedSurname:"Slayer",
    interviewDate:"2023-01-03"
  }
];

class InterviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interiviews: interiviews
    }
  }

  render() {

    return (
      <Container>
        <ListGroup as="ul">
          {this.state.interiviews.map(e => <ListGroupItem
            as="li"
            key={e.id}>
              <Interview
                interviewType={e.interviewType}
                interviewedName={e.interviewedName}
                interviewedSurname={e.interviewedSurname}
                interviewDate={e.interviewDate}>
              </Interview>
          </ListGroupItem>)}
        </ListGroup>
      </Container>
    )
  }
}

InterviewList.propTypes = {};

InterviewList.defaultProps = {};

export default InterviewList;
