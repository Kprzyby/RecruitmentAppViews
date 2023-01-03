import React from 'react';
import PropTypes from 'prop-types';
import styles from './CandidateList.module.css';
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useState } from 'react';
import Candidate from '../Candidate/Candidate';

const candidates = [
  {
    id: 0,
    name: 'Kacper',
    surname: 'Kowalski',
    email: 'Kacperkowalski1@wp.pl',
    phoneNumber: '123456789',
    stage: 'New'
  },
  {
    id: 1,
    name: 'Gal',
    surname: 'Anonim',
    email: 'Galanonim2@wp.pl',
    phoneNumber: '234567890',
    stage: 'HR interview'
  },
  {
    id: 2,
    name: 'Maria',
    surname: 'Skłodowska',
    email: 'MariaSkłodowska3@wp.pl',
    phoneNumber: '345678901',
    stage: 'Dropped out'
  },
  {
    id: 3,
    name: 'Doom',
    surname: 'Slayer',
    email: 'DoomSlayer4@wp.pl',
    phoneNumber: '456789012',
    stage: 'Tech interview'
  },
  {
    id: 4,
    name: 'Iudex',
    surname: 'Gundyr',
    email: 'IudexGundyr5@wp.pl',
    phoneNumber: '567890123',
    stage: 'Dropped out'
  },
  {
    id: 5,
    name: 'Bilbo',
    surname: 'Baggins',
    email: 'BilboBaggins6@wp.pl',
    phoneNumber: '678901234',
    stage: 'New'
  },
  {
    id: 6,
    name: 'Harry',
    surname: 'Potter',
    email: 'HarryPotter7@wp.pl',
    phoneNumber: '789012345',
    stage: 'HR interview'
  },
  {
    id: 7,
    name: 'Mikaela',
    surname: 'Hyakuya',
    email: 'MikaelaHyakuya8@wp.pl',
    phoneNumber: '890123456',
    stage: 'Hired'
  },
  {
    id: 8,
    name: 'Geralt',
    surname: 'of Rivia',
    email: 'GeraltOfRivia9@wp.pl',
    phoneNumber: '012345678',
    stage: 'Tech interview'
  },
  {
    id: 9,
    name: 'Eragon',
    surname: 'Bronsson',
    email: 'EragonBronsson10@wp.pl',
    phoneNumber: '123456098',
    stage: 'HR interview'
  },
  {
    id: 10,
    name: 'Sonic',
    surname: 'the Hedgehog',
    email: 'SonicTheHedgehog11@wp.pl',
    phoneNumber: '123098345',
    stage: 'New'
  },
  {
    id: 11,
    name: 'James',
    surname: 'Bond',
    email: 'JamesBond12@wp.pl',
    phoneNumber: '997997997',
    stage: 'Tech interview'
  },
  {
    id: 12,
    name: 'Lord',
    surname: 'Voldemort',
    email: 'LordVoldemort13@wp.pl',
    phoneNumber: '098234853',
    stage: 'Dropped out'
  },
  {
    id: 13,
    name: 'Amane',
    surname: 'Fujimiya',
    email: 'AmaneFujimij14a@wp.pl',
    phoneNumber: '648420864',
    stage: 'New'
  },
  {
    id: 14,
    name: 'Mahiru',
    surname: 'Shinna',
    email: 'MahiruShinna15',
    phoneNumber: '098765432',
    stage: 'New'
  }
]

const CandidateList = () => {

  const [selectedId, setSelectedId] = useState(-1);

  return (
    <Container>
      <Row>
        <Col sm={3} lg={6}>
          <ListGroup as="ul" style={{width:"fit-content"}}>
            {candidates.map(e => <ListGroupItem
              key={e.id}
              as="li"
              action
              active={selectedId === e.id}
              onClick={() => setSelectedId(e.id)}>
              <Candidate name={e.name} surname={e.surname} stage={e.stage}></Candidate>
            </ListGroupItem>)}
          </ListGroup>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )

};

CandidateList.propTypes = {};

CandidateList.defaultProps = {};

export default CandidateList;
