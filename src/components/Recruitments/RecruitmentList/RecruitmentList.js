import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecruitmentList.module.css';
import { Container, Row, Col, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap';
import Recruitment from '../Recruitment/Recruitment';
import RecruitmentDetails from '../RecruitmentDetails/RecruitmentDetails';
import { Link } from 'react-router-dom';

const recruitments=[
  {
    id:1,
    position:"React dev",
    seniority:"mid",
    location:"Białystok",
    beginningDate:"2023-01-05",
    endingDate:"2023-03-12",
    skills:[
      {
        id:1,
        name:"Javascript",
        proficiency:3
      },
      {
        id:2,
        name:"React",
        proficiency:4
      }
    ]
  },
  {
    id:2,
    position:".NET dev",
    seniority:"junior",
    location:"Białystok",
    beginningDate:"2023-01-12",
    endingDate:"2023-02-12",
    skills:[
      {
        id:1,
        name:"C#",
        proficiency:3
      },
      {
        id:2,
        name:".NET",
        proficiency:4
      }
    ]
  },
  {
    id:3,
    position:"Angular dev",
    seniority:"mid/senior",
    location:"Warsaw",
    beginningDate:"2023-01-05",
    endingDate:"2023-03-24",
    skills:[
      {
        id:1,
        name:"Typescript",
        proficiency:3
      },
      {
        id:2,
        name:"Angular",
        proficiency:4
      }
    ]
  },
  {
    id:4,
    position:"Python dev",
    seniority:"junior/mid",
    location:"Suwałki",
    beginningDate:"2023-01-07",
    endingDate:"2023-02-14",
    skills:[
      {
        id:1,
        name:"Python",
        proficiency:4
      },
      {
        id:2,
        name:"Git",
        proficiency:3
      }
    ]
  },
  {
    id:5,
    position:"Data scientist",
    seniority:"senior",
    location:"Kraków",
    beginningDate:"2023-01-01",
    endingDate:"2023-04-12",
    skills:[
      {
        id:1,
        name:"Python",
        proficiency:4
      },
      {
        id:2,
        name:"Git",
        proficiency:5
      },
      {
        id:3,
        name:"Matlab",
        proficiency:4,
      }
    ]
  },
  {
    id:6,
    position:"Tester",
    seniority:"mid",
    location:"Białystok",
    beginningDate:"2023-01-07",
    endingDate:"2023-03-22",
    skills:[
      {
        id:1,
        name:"Postman",
        proficiency:3
      }
    ]
  },
  {
    id:7,
    position:"Java dev",
    seniority:"junior",
    location:"Gdańsk",
    beginningDate:"2023-01-06",
    endingDate:"2023-03-01",
    skills:[
      {
        id:1,
        name:"Java",
        proficiency:4
      }
    ]
  },
  {
    id:8,
    position:"SQL specialist",
    seniority:"mid/senior",
    location:"Białystok",
    beginningDate:"2023-01-02",
    endingDate:"2023-05-12",
    skills:[
      {
        id:1,
        name:"SQL",
        proficiency:4
      },
      {
        id:2,
        name:"SSMS",
        proficiency:4
      }
    ]
  },
]

const pageSize=5;

class RecruitmentList extends React.Component{
  constructor(props){
    super(props);

    let recruitmentsPage=[];

    for(let i=0;i<pageSize;i++){
      recruitmentsPage.push(recruitments[i]);
    }

    this.state={
      recruitments: recruitmentsPage,
      recruitmentsBeforePaging:recruitments,
      selectedId:-1,
      pageNumber:1,
      totalCount:8,
      lastPageNumber:2
    }

    this.filterRecruitments=this.filterRecruitments.bind(this);
    this.loadNextPage=this.loadNextPage.bind(this);
    this.loadPreviousPage=this.loadPreviousPage.bind(this);
  }

  filterRecruitments(e){
    const filteredRecruitments=recruitments.filter(f=>f.position.startsWith(e.target.value));

    this.setState({
      recruitmentsBeforePaging:filteredRecruitments,
      recruitments:filteredRecruitments,
      totalCount:filteredRecruitments.length,
      pageNumber:filteredRecruitments.length/pageSize>0?1:0,
      lastPageNumber:Math.ceil(filteredRecruitments.length/pageSize)
    });
  }
  loadPreviousPage(e){
    let recruitments=[];

    for(let i=(this.state.pageNumber-2)*pageSize;i<(this.state.pageNumber-1)*pageSize;i++){
      recruitments.push(this.state.recruitmentsBeforePaging[i]);
    }

    this.setState((state)=>{
      return{
        pageNumber:state.pageNumber-1,
        recruitments:recruitments
      }
    })
  }
  loadNextPage(e){
    let recruitments=[];

    const lastItem=(this.state.pageNumber+1)*pageSize>this.state.totalCount?this.state.totalCount:(this.state.pageNumber+1)*pageSize;

    for(let i=this.state.pageNumber*pageSize;i<lastItem;i++){
      recruitments.push(this.state.recruitmentsBeforePaging[i]);
    }

    this.setState((state)=>{
      return{
        pageNumber:state.pageNumber+1,
        recruitments:recruitments
      }
    })
  }

  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col sm={12} lg={9} className="my-3">
              <Link to={"/Recruitments/Create"} className="btn btn-primary rounded">Create a recruitment</Link>
            </Col>
            <Col sm={12} lg={3} className="my-3">
              <label htmlFor='filter'>Find the recruitment by the position</label><br></br>
              <input id="filter" placeholder='React dev' onChange={this.filterRecruitments}></input>
            </Col>
          </Row>
        </Container><br></br>

        <Container style={{clear:"both"}}>
          <Row>
            <Col>
              <ListGroup as="ul">
                {this.state.recruitments.map(e=><ListGroupItem
                  as="li"
                  key={e.id}
                  action
                  active={this.state.selectedId===e.id}
                  onClick={f=>this.setState({selectedId:f.id})}>
                    <Recruitment
                    endingDate={e.endingDate}
                    position={e.position}
                    location={e.location}
                    seniority={e.seniority}
                    beginningDate={e.beginningDate}
                    skills={e.skills}>
                    </Recruitment><br></br>
                </ListGroupItem>)}
              </ListGroup>
            </Col>
          </Row><br></br>
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
      </div>
    )
  }
}

RecruitmentList.propTypes = {};

RecruitmentList.defaultProps = {};

export default RecruitmentList;
