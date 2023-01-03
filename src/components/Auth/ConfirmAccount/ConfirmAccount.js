import React from 'react';
import PropTypes from 'prop-types';
import styles from './ConfirmAccount.module.css';
import { MDBIcon } from 'mdb-react-ui-kit';

const ConfirmAccount = () => (
  <div className="text-center">
    <MDBIcon style={{color:"green"}} icon='check-circle' size='5x'></MDBIcon><br></br>
    <h3 className="mt-3">Account confirmed! Proceed to log in</h3>
  </div>
);

ConfirmAccount.propTypes = {};

ConfirmAccount.defaultProps = {};

export default ConfirmAccount;
