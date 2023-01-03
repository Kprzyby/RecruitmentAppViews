import React from 'react';
import PropTypes from 'prop-types';
import styles from './Candidate.module.css';
import {Badge} from 'react-bootstrap'
import { textAlign } from '@mui/system';

const getBadgeColor=(stage)=>{
  if (stage === 'New') return 'secondary'
  else if (stage === 'HR interview') return 'info'
  else if (stage === 'Tech interiview') return 'primary'
  else if (stage==='Dropped out') return 'danger'
  else if (stage === 'Hired') return 'success'
}

function Candidate(props){
  return(
    <div className={styles.Candidate}>
      <span>{props.name} {props.surname}</span>
      <Badge pill className="ml-2 p-2" bg={getBadgeColor(props.stage)} style={{float:"right"}}>{props.stage}</Badge>
  </div>
  )
};

Candidate.propTypes = {
  name:PropTypes.string,
  surname:PropTypes.string,
  stage:PropTypes.string
};

Candidate.defaultProps = {};

export default Candidate;
