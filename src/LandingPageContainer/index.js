import React, { Component } from 'react'
// used npm i for the following
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react'
import GoalContainer from '../GoalContainer'//renders goal in relation to project

 class LandingPageContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      something:""
    }
  }


updateProject = async () => {
  try{
    const getUpdate = await fetch(process.env.REACT_APP_API + '/api/v1/project/id')
  }catch(err){console.error(err);}
} 
render(){
  return (
    <div>
       <h1> This is the Landing Page Container</h1>
      <div className="lP">
        <div className="portals">
          <div className="intake">
            <div>
              
            </div>
          </div>
          <div className="project">
          .
      </div>
      </div>
      </div>
      </div>
  );
  }
} 

export default LandingPageContainer;
