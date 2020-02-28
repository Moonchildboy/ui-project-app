import React, { Component } from 'react'
// used npm i for the following
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react'
import ProjectContainer from '../ProjectContainer'

 class LandingPageContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      something:""
    }
  }
render(){
  return (
     <div>
       <h1> This is the LandingPageContainer</h1>
     </div>
  );
  }
} 

export default LandingPageContainer;
