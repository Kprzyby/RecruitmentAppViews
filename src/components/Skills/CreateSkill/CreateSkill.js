import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateSkill.module.css';
import {Button, Form, FormGroup, FormLabel, FormControl} from "react-bootstrap"
import { MDBIcon } from 'mdb-react-ui-kit';
import Popup from 'reactjs-popup';

const CreateSkill = () => (
  <div className={styles.CreateSkill} style={{float:"right"}}>
    <Popup position="bottom right" trigger={<Button variant='primary' size="md"><MDBIcon fas icon="plus" size="md"/>&nbsp;Add a skill</Button>}>
      <Form className="mt-3 p-2" style={{border:"black thin solid", backgroundColor:"#e6e6e6"}}>
        <FormGroup className="mb-3" controlId="SkillName">
          <FormLabel>Name</FormLabel>
          <FormControl type="text" placeholder="Skill's name"></FormControl>
        </FormGroup>

        <Button variant='primary' className="rounded" size="sm">Add</Button>
      </Form>
    </Popup>
  </div>
);

CreateSkill.propTypes = {};

CreateSkill.defaultProps = {};

export default CreateSkill;
