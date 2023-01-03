import React from 'react';
import PropTypes from 'prop-types';
import styles from './TermsOfUse.module.css';
import {Card,Button, Container} from "react-bootstrap"
import {MDBIcon} from 'mdb-react-ui-kit'

const TermsOfUse = () => (
  <div className="d-flex justify-content-center align-items-center">
    <Card style={{width:"60%"}}>
      <Card.Header>Terms of use</Card.Header>
      <Card.Body style={{textAlign:"left"}}>
        <MDBIcon far icon="file" size="2x"/>&nbsp;
        <span>Latest version</span><br></br>
        <button className="btn btn-primary rounded-pill">Download</button>
      </Card.Body>
    </Card>
  </div>
);

TermsOfUse.propTypes = {};

TermsOfUse.defaultProps = {};

export default TermsOfUse;
