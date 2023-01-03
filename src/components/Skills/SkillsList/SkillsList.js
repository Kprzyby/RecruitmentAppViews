import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsList.module.css';
import {Table, Button} from "react-bootstrap"
import {MDBIcon} from 'mdb-react-ui-kit'
import CreateSkill from '../CreateSkill/CreateSkill';

class SkillsList extends React.Component{
  constructor(props){
    super(props);

    const skills=[
      {
        id:1,
        name:"Agile"
      },
      {
        id:2,
        name:"C"
      },
      {
        id:3,
        name:"C#"
      },
      {
        id:4,
        name:"C++"
      },
      {
        id:5,
        name:"Git"
      },
      {
        id:6,
        name:"Java"
      },
      {
        id:7,
        name:"Python"
      },
      {
        id:8,
        name:"Scrum"
      }];

    this.state={
      idToEdit:-1,
      skills:skills,
      sortingOrder:"ASC"
    };

    this.editItem=this.editItem.bind(this);
    this.sortSkills=this.sortSkills.bind(this);
  }

  sortSkills(){
    let comparer;

    if(this.state.sortingOrder==="ASC"){
      comparer=function(a,b){
      if(a.name<b.name) return 1;
      if(a.name>b.name) return -1;
  
      return 0;
      }
    }
    else{
      comparer=function(a,b){
        if(a.name<b.name) return -1;
        if(a.name>b.name) return 1;
    
        return 0;
        }
    }

    const skills=this.state.skills.sort(comparer);

    let sortingOrder="ASC";

    if(this.state.sortingOrder==="ASC"){
      sortingOrder="DESC"
    }

    this.setState({
      skills:skills,
      sortingOrder:sortingOrder
    })
  }

editItem(event) {
  if (event.key === 'Enter') {
    event.preventDefault();

    this.setState({
        idToEdit:-1
    });
  }
}

  render(){
    return(
      <div>
        <CreateSkill></CreateSkill>
        <div className="d-flex justify-content-center align-items-center" style={{clear:"both"}}>
      <Table striped bordered hover style={{width:"70vw"}} className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={e=>this.sortSkills()}>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.skills.map((e, index)=>
            <tr key={e.id} style={{display:Table}}>
              <td style={{width:"10vw", verticalAlign:"middle"}}>{index+1}</td>
              <td style={{width:"20vw", verticalAlign:"middle"}}>
                {this.state.idToEdit===e.id?
                <input type='text' defaultValue={e.name} onKeyUp={g=>this.editItem(g)}></input>
                :<span>{e.name}</span>}  
              </td>
              <td style={{width:"40vw", verticalAlign:"middle"}}>
                <Button className="rounded" variant='success' size="sm" onClick={f=>this.setState({idToEdit:e.id})}>
                  <MDBIcon far icon="edit" size="lg"/>
                </Button>
                <Button className="rounded" variant='danger' size="sm">
                  <MDBIcon fas icon="trash" size="lg"/>
                </Button>
              </td>
            </tr>
            )}
        </tbody>
      </Table>
    </div>
      </div>
    )
  }
};

SkillsList.propTypes = {};

SkillsList.defaultProps = {};

export default SkillsList;
