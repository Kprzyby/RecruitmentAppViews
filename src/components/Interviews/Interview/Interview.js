import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Interview.module.css';
import { Card, Button, Form, FormControl, Modal, Container, Row, Col } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { MDBIcon } from 'mdb-react-ui-kit'
import DeleteModal from '../../DeleteModal/DeleteModal';

class Interview extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editClicked: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleEditClicked = this.toggleEditClicked.bind(this);
  }

  handleInputChange(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      this.setState({
        editClicked: false
      });
    }
  }
  toggleEditClicked() {
    this.setState((state) => {
      return {
        editClicked: !state.editClicked
      }
    })
  }

  render() {
    return (
      <Card bg="info">
        <Card.Header>
          <span>{this.props.interviewType}</span>
          <div style={{ float: "right" }}>
            <DeleteModal modalMessage="Are you sure you want to cancel this interview?"></DeleteModal>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Interviewed</Card.Title>
          <Card.Text>{this.props.interviewedName} {this.props.interviewedSurname}</Card.Text>
          <Card.Title>
            <span className="mr-2">Interview date</span>
            <Button className='rounded' size="md" variant="success" onClick={this.toggleEditClicked}>
              <MDBIcon far icon="edit" size="lg" />
            </Button>
          </Card.Title>
          <Card.Text>
            {this.state.editClicked ?
              <Form.Control type="date" defaultValue={this.props.interviewDate} onChange={(e) => this.handleInputChange(e)}></Form.Control>
              : <span>{this.props.interviewDate}</span>}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
};

Interview.propTypes = {
  interviewType: PropTypes.string,
  interviewedName: PropTypes.string,
  interviewedSurname: PropTypes.string,
  interviewDate: PropTypes.string
};

Interview.defaultProps = {};

export default Interview;
