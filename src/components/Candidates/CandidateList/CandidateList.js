import React from 'react';
import PropTypes from 'prop-types';
import styles from './CandidateList.module.css';
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useState } from 'react';
import Candidate from '../Candidate/Candidate';
import CandidateDetails from '../CandidateDetails/CandidateDetails';

const candidates = [
  {
    id: 0,
    name: 'Kacper',
    surname: 'Kowalski',
    email: 'Kacperkowalski1@wp.pl',
    phoneNumber: '123456789',
    stage: 'New',
    HRInterviewDate: "2023-01-05",
    TechInterviewDate: ""
  },
  {
    id: 1,
    name: 'Gal',
    surname: 'Anonim',
    email: 'Galanonim2@wp.pl',
    phoneNumber: '234567890',
    stage: 'HR interview',
    HRInterviewDate: "2023-01-05",
    TechInterviewDate: "2023-01-10"
  },
  {
    id: 2,
    name: 'Maria',
    surname: 'Skłodowska',
    email: 'MariaSkłodowska3@wp.pl',
    phoneNumber: '345678901',
    stage: 'Dropped out',
    HRInterviewDate: "",
    TechInterviewDate: ""
  },
  {
    id: 3,
    name: 'Doom',
    surname: 'Slayer',
    email: 'DoomSlayer4@wp.pl',
    phoneNumber: '456789012',
    stage: 'Tech interview',
    HRInterviewDate: "2023-01-10",
    TechInterviewDate: "2023-01-12"
  },
  {
    id: 4,
    name: 'Iudex',
    surname: 'Gundyr',
    email: 'IudexGundyr5@wp.pl',
    phoneNumber: '567890123',
    stage: 'Dropped out',
    HRInterviewDate: "2022-12-13",
    TechInterviewDate: ""
  },
  {
    id: 5,
    name: 'Bilbo',
    surname: 'Baggins',
    email: 'BilboBaggins6@wp.pl',
    phoneNumber: '678901234',
    stage: 'New',
    HRInterviewDate: "2023-01-07",
    TechInterviewDate: ""
  },
  {
    id: 6,
    name: 'Harry',
    surname: 'Potter',
    email: 'HarryPotter7@wp.pl',
    phoneNumber: '789012345',
    stage: 'HR interview',
    HRInterviewDate: "2023-01-07",
    TechInterviewDate: "2023-01-20"
  },
  {
    id: 7,
    name: 'Mikaela',
    surname: 'Hyakuya',
    email: 'MikaelaHyakuya8@wp.pl',
    phoneNumber: '890123456',
    stage: 'Hired',
    HRInterviewDate: "2023-01-01",
    TechInterviewDate: "2023-01-02"
  },
  {
    id: 8,
    name: 'Geralt',
    surname: 'of Rivia',
    email: 'GeraltOfRivia9@wp.pl',
    phoneNumber: '012345678',
    stage: 'Tech interview',
    HRInterviewDate: "2023-02-10",
    TechInterviewDate: "2023-02-11"
  },
  {
    id: 9,
    name: 'Eragon',
    surname: 'Bronsson',
    email: 'EragonBronsson10@wp.pl',
    phoneNumber: '123456098',
    stage: 'HR interview',
    HRInterviewDate: "2023-01-08",
    TechInterviewDate: ""
  },
  {
    id: 10,
    name: 'Sonic',
    surname: 'the Hedgehog',
    email: 'SonicTheHedgehog11@wp.pl',
    phoneNumber: '123098345',
    stage: 'New',
    HRInterviewDate: "",
    TechInterviewDate: ""
  },
  {
    id: 11,
    name: 'James',
    surname: 'Bond',
    email: 'JamesBond007@wp.pl',
    phoneNumber: '007007007',
    stage: 'Tech interview',
    HRInterviewDate: "2023-10-07",
    TechInterviewDate: "2023-10-08"
  },
  {
    id: 12,
    name: 'Lord',
    surname: 'Voldemort',
    email: 'LordVoldemort13@wp.pl',
    phoneNumber: '098234853',
    stage: 'Dropped out',
    HRInterviewDate: "",
    TechInterviewDate: ""
  },
  {
    id: 13,
    name: 'Amane',
    surname: 'Fujimiya',
    email: 'AmaneFujimij14a@wp.pl',
    phoneNumber: '648420864',
    stage: 'New',
    HRInterviewDate: "2023-01-07",
    TechInterviewDate: ""
  },
  {
    id: 14,
    name: 'Mahiru',
    surname: 'Shinna',
    email: 'MahiruShinna15',
    phoneNumber: '098765432',
    stage: 'New',
    HRInterviewDate: "2023-01-07",
    TechInterviewDate: ""
  }
]

const pageSize=10;

class CandidateList extends React.Component{
  constructor(props){
    super(props);

    let candidatesPage=[];

    for(let i=0;i<pageSize;i++){
      candidatesPage.push(candidates[i]);
    }

    this.state={
      selectedId:-1,
      candidatesBeforePaging:candidates,
      candidates:candidatesPage,
      pageNumber:1,
      lastPageNumber:Math.ceil(candidates.length/pageSize),
      totalCount:candidates.length
    }

    this.toggleSelectedId=this.toggleSelectedId.bind(this);
    this.filterCandidates=this.filterCandidates.bind(this);
    this.loadPreviousPage=this.loadPreviousPage.bind(this);
    this.loadNextPage=this.loadNextPage.bind(this);
  }

  toggleSelectedId(id){
    if(id===this.state.selectedId){
      this.setState({
        selectedId:-1
      })
    }
    else{
      this.setState({
        selectedId:id
      })
    }
  }
  filterCandidates(e){
    const filteredCandidates=candidates.filter(f=>f.surname.startsWith(e.target.value));

    this.setState({
      candidates:filteredCandidates,
      candidatesBeforePaging:filteredCandidates,
      totalCount:filteredCandidates.length,
      pageNumber:filteredCandidates.length/pageSize>0?1:0,
      lastPageNumber:Math.ceil(filteredCandidates.length/pageSize)
    })
  }
  loadPreviousPage(){
    let candidates=[];

    for(let i=(this.state.pageNumber-2)*pageSize;i<(this.state.pageNumber-1)*pageSize;i++){
      candidates.push(this.state.candidatesBeforePaging[i]);
    }

    this.setState((state)=>{
      return{
        pageNumber:state.pageNumber-1,
        candidates:candidates
      }
    })
  }
  loadNextPage(){
    let candidates=[];

    const lastItem=(this.state.pageNumber+1)*pageSize>this.state.totalCount?this.state.totalCount:(this.state.pageNumber+1)*pageSize;

    for(let i=this.state.pageNumber*pageSize;i<lastItem;i++){
      candidates.push(this.state.candidatesBeforePaging[i]);
    }

    this.setState((state)=>{
      return{
        pageNumber:state.pageNumber+1,
        candidates:candidates
      }
    })
  }


  render(){
    const candidate=candidates.find(e=>e.id===this.state.selectedId);

    return (
      <Container>
        <Row className="mb-3">
          <input type='text' placeholder='Find a candidate by surname' onChange={e=>this.filterCandidates(e)}></input>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <ListGroup as="ul">
              {this.state.candidates.map(e => <div key={e.id}>
                <ListGroupItem
                as="li"
                action
                active={this.state.selectedId === e.id}
                onClick={() => {this.toggleSelectedId(e.id)}}
                style={{cursor:"pointer"}}>
                <Candidate name={e.name} surname={e.surname} stage={e.stage}></Candidate>
                </ListGroupItem>
                {this.state.selectedId===e.id?
                <CandidateDetails
                  name={e.name}
                  surname={e.surname}
                  email={e.email}
                  phoneNumber={e.phoneNumber}
                  stage={e.stage}
                  HRInterviewDate={e.HRInterviewDate}
                  TechInterviewDate={e.TechInterviewDate}>
                </CandidateDetails>
              :<span></span>}
                </div>)}
            </ListGroup>
          </Col>
        </Row>
        <Row className="text-center">
            <Col>
              {this.state.pageNumber<=1?
              <Button className="rounded" variant="info" disabled>&#10094;&#9866;</Button>
              :<Button className="rounded" variant="info" onClick={this.loadPreviousPage}>&#10094;&#9866;</Button>}
              <span>Page {this.state.pageNumber} out of {this.state.lastPageNumber}</span>
              {this.state.pageNumber===this.state.lastPageNumber?
              <Button className="rounded" variant="info" disabled>&#9866;&#10095;</Button>
              :<Button className="rounded" variant="info" onClick={this.loadNextPage}>&#9866;&#10095;</Button>}
            </Col>
          </Row>
      </Container>
    )
  }
};

CandidateList.propTypes = {};

CandidateList.defaultProps = {};

export default CandidateList;
