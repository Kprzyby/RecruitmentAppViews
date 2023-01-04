import React from 'react';
import PropTypes from 'prop-types';
import styles from './DeleteModal.module.css';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

const DeleteModal = (props) => {
  const [deleteClicked, setDeleteClicked] = useState(false);

  return (
    <span>
      <Button className='rounded' size="md" variant="danger" onClick={()=>setDeleteClicked(true)}>
        <MDBIcon fas icon="trash" size="lg" />
      </Button>
      <Modal show={deleteClicked} onHide={() => setDeleteClicked(false)} centered>
        <Container className="text-center">
          <Row lg={12} md={12} sm={12}>
            <Modal.Title className="mt-2">{props.modalMessage}</Modal.Title>
          </Row>
          <Row lg={12} md={12} sm={12}>
            <Modal.Body>
              <Button variant="danger" className="rounded" size="md" onClick={()=>setDeleteClicked(false)}>No</Button>
              <Button variant="success" className="rounded" size="md" onClick={()=>setDeleteClicked(false)}>Yes</Button>
            </Modal.Body>
          </Row>
        </Container>
      </Modal>
    </span>
  )
};

DeleteModal.propTypes = {
  modalMessage:PropTypes.string
};

DeleteModal.defaultProps = {};

export default DeleteModal;
