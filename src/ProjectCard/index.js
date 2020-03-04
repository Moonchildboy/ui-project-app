import React, { Component } from 'react'
import { Card, Button, Form, Input, Select } from 'semantic-ui-react'	
import NewGoalContainer from '../NewGoalContainer'

class ProjectCard extends Component {
  constructor() {
    super()
    this.state = {
		 title:'',
		 start_date:'',//should contain an arrary of dates
		 end_date:'',
		 //look for exps. of working w dates
		 status:'',//will be an arry of predetermined values
		 priority:'',
		 showNewGoalForm: false
    }
  }

componentDidMount() {						
	this.mapPropsToState()					
}						
						
handleChange = (event) => {						
	this.setState({
		[event.target.name]: event.target.value						
	})						
}									

mapPropsToState = () => {
	this.setState({
		title: this.props.cardValue.title,
		// goal: this.props.goalValue.title
		start_date: this.props.cardValue.start_date,
		end_date: this.props.cardValue.end_date,
		status: this.props.cardValue.status,
		priority: this.props.cardValue.priority,
		id: this.props.cardValue.id
	})
}

associateGoal = (id) => {//fka toggleView
	// console.log('this is the associate Goal ƒ()', id);
	// let newView = false //originally delcared w/o assignment
	// if(this.state.showNewGoalForm === false) {
	// 	newView = true
	// }
	this.setState({
		showNewGoalForm: true
	})
}

closeModal = () => {
	this.setState({
		showNewGoalForm: false
	})
}

render(){
	console.log("render >>> this.state ", this.state);
	if(this.state.showNewGoalForm === true){
		return <NewGoalContainer project={this.state} closeModal={this.closeModal}/>
	} else {
		return (						
			<Form onSubmit={this.handleSubmit}>
					<Card key={this.state.id} centered={true}>
						<Button onClick={() => this.associateGoal(this.state.id)}> +Add Goals </Button>
						<Card.Content>
							<Card.Header>
								<Input
									name="title"
									value={this.state.title} 
									onChange={this.handleChange}/>
								<Input
									name="start_date" 
									value={this.state.start_date} 
									onChange={this.handleChange}/>
								<Input
									name="end_date" 
									value={this.state.end_date} 
									onChange={this.handleChange}/>
								<Input
									name="status" 
									value={this.state.status} 
									onChange={this.handleChange}/>
								<Input
									name="priority" 
									value={this.state.priority} 
									onChange={this.handleChange}/>
							</Card.Header>
						</Card.Content>
					<Button onClick={()=>this.props.update(this.state)}>Update</Button>
					<Button onClick={()=>this.props.delete(this.state.id)}>Delete</Button>
					</Card>
				</Form>
			);			
		}
	}					
}						
						
export default ProjectCard;						