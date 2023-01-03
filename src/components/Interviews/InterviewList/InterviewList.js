import React from 'react';
import PropTypes from 'prop-types';
import styles from './InterviewList.module.css';
import { ListGroup, ListGroupItem, Container, Row, Form} from 'react-bootstrap';
import Interview from '../Interview/Interview';
import Select from 'react-select'

const interiviews = [
  {
    id:0,
    interviewType:"HR interview",
    interviewedName:"Doom",
    interviewedSurname:"Slayer",
    interviewDate:"2023-01-03"
  },
  {
    id:1,
    interviewType:"HR interview",
    interviewedName:"Sonic",
    interviewedSurname:"The Hedgehog",
    interviewDate:"2023-01-05"
  },
  {
    id:2,
    interviewType:"Tech interview",
    interviewedName:"Harry",
    interviewedSurname:"Potter",
    interviewDate:"2023-02-12"
  },
  {
    id:3,
    interviewType:"Tech interview",
    interviewedName:"James",
    interviewedSurname:"Bond",
    interviewDate:"2023-10-07"
  }
];

class InterviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interiviews: interiviews
    }

    this.filterInterviews=this.filterInterviews.bind(this);
  }

  filterInterviews(e){
    let filteredInterviews;

    if(!e.target.value){
      filteredInterviews=interiviews;
    }
    else{
      filteredInterviews=interiviews.filter(f=>f.interviewType===e.target.value);
    }

    this.setState({
      interiviews:filteredInterviews
    });
  }

  render() {

    return (
      <Container>
        <Row className="mb-3">
          <label htmlFor='filter'>Filter by type</label>
          <Form.Select id='filter' onChange={this.filterInterviews}>
            <option disabled selected>Choose the interview type</option>
            <option value="">Show both</option>
            <option value="HR interview">HR interview</option>
            <option value="Tech interview">Tech interview</option>
          </Form.Select>
        </Row>
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
