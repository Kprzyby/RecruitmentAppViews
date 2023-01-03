import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditRecruitment.module.css';
import { renderMatches } from 'react-router-dom';
import {Col, Row, Button, Container, FormControl, Form, FormGroup, FormLabel, ListGroup, ListGroupItem} from "react-bootstrap"
import { Rating } from '@mui/material';
import {MDBIcon} from 'mdb-react-ui-kit'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const skills = [
  {
    id: 1,
    name: "Agile"
  },
  {
    id: 2,
    name: "C"
  },
  {
    id: 3,
    name: "C#"
  },
  {
    id: 4,
    name: "C++"
  },
  {
    id: 5,
    name: "Git"
  },
  {
    id: 6,
    name: "Java"
  },
  {
    id: 7,
    name: "Python"
  },
  {
    id: 8,
    name: "Scrum"
  }];

function EditRecruitment(props){

  const location = useLocation();
  const [skillsAvailable, setSkillsAvailable]=useState(skills.filter(e=>!location.state.skillsUsed.find(f=>f.id===e.id)));
  const [skillsUsed, setSkillsUsed]=useState(location.state.skillsUsed);

    return(
      <Container className="text-center">
        <Form className="mt-3">
          <Row>
            <Col sm={12} lg={6}>
              <FormGroup className="mb-3" controlId="Position">
                <FormLabel>Position</FormLabel>
                <FormControl type='text' placeholder='React dev' defaultValue={location.state.position}></FormControl>
              </FormGroup>
            </Col>
            <Col sm={12} lg={6}>
              <FormGroup className="mb-3" controlId="Seniority">
                <FormLabel>Seniority</FormLabel>
                <Form.Select defaultValue={location.state.seniority}>
                  <option>junior</option>
                  <option>junior/mid</option>
                  <option>mid</option>
                  <option>mid/senior</option>
                  <option>senior</option>
                </Form.Select>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6}>
              <FormGroup className="mb-3" controlId="BeginningDate">
                <FormLabel>Beginning date</FormLabel>
                <FormControl type='date' defaultValue={location.state.beginningDate}></FormControl>
              </FormGroup>
            </Col>
            <Col sm={12} lg={6}>
              <FormGroup className="mb-3" controlId="EndingDate">
                <FormLabel>Ending date</FormLabel>
                <FormControl type='date' defaultValue={location.state.endingDate}></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={12}>
              <FormGroup className="mb-3" controlId="Location">
                <FormLabel>Location</FormLabel>
                <FormControl type='text' placeholder="Białystok" defaultValue={location.state.location}></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Col sm={12} lg={12}>
            <FormGroup controlId='SkillsAvailable'>
              <Form.Label></Form.Label>
              <Form.Select value="Requirements" onChange={e=>{
                    const skill=JSON.parse(e.target.value);
                    const newSkillsUsed=skillsUsed;
                    const newSkillsAvailable=skillsAvailable.filter(f=>f.id!==skill.id);
                
                    newSkillsUsed.push(skill);
                
                    setSkillsAvailable(newSkillsAvailable);
                    setSkillsUsed(newSkillsUsed);
                }
              }>
                <option disabled value='Requirements'>Requirements</option>
                {skillsAvailable.map(e=><option key={e.id} value={JSON.stringify(e)}>{e.name}</option>)}
              </Form.Select>
            </FormGroup>
          </Col>
          <Col sm={12} lg={12} className="mb-2">
            <ListGroup className="mt-3">
              {skillsUsed.map(e=><ListGroupItem key={e.id}>
                <span>{e.name}&nbsp;</span>
                <Rating value={e.proficiency}></Rating>&nbsp;
                <MDBIcon fas icon="times" size="sm" style={{color:"red"}}/>
              </ListGroupItem>)}
            </ListGroup>
          </Col>
        </Form>
        <Button className="rounded" variant="primary" type="submit" style={{ width: "50%" }}>Save changes</Button>
      </Container>
    )
};

EditRecruitment.propTypes = {};

EditRecruitment.defaultProps = {};

export default EditRecruitment;
