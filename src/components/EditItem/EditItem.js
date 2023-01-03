import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditItem.module.css';

function EditItem(props){
  if(props.editClicked===false){
    return <span></span>
  }
};

EditItem.propTypes = {
  type:PropTypes.string,
  name:PropTypes.string,
  value:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  editClicked:PropTypes.bool,
};

EditItem.defaultProps = {};

export default EditItem;
