import React, { Component } from 'react'
import { Card, Button, Form, Input, Select, Modal, Header } from 'semantic-ui-react'
import { Doughnut, Line, Gantt } from 'react-chartjs-2';
import ProjectCard from '../ProjectCard'
import GoalList from '../GoalList'

class NewGoalContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			goals:[],
			title:'',
			complete:false,
			project: null
		}
	}

componentDidMount(){
	this.compileGoals()
}

createGoal = async (newGoal) => {

	console.log('this.props >>>', this.props);


	const body = {
		title: this.state.title,
		complete: this.state.complete,
		project: this.props.project.id
	}

	console.log("calling the createGoal function", newGoal);
	try{
		const createGoalResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/goal/', {
			method: 'POST',
			credentials:'include',
			body: JSON.stringify(body), // this is how you convert an object to JSON
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const createGoalJson = await createGoalResponse.json()
		console.log(createGoalJson);
		if(createGoalResponse.status === 201) {
			// const newArr = this.state.goals
			// newArr.push(createGoalJson.data)
			this.setState({
				// goals: newArr
				goals: [...this.state.goals, createGoalJson.data]
			})
		}
	} catch(err){
		console.error(err);
	}
}

compileGoals = async () => {
	const url = process.env.REACT_APP_API_URL + '/api/v1/goal/' + this.props.project.id
	try{
		const goalResponse = await fetch(url, {
			method:'GET',
			credentials:'include',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const goalJson = await goalResponse.json()
		this.setState({
			goals: goalJson.data
		})
	} catch (err){
		console.error(err);
	}
}

handleStatus = () => {
	this.setState({
		complete: true
	})
}

handleChange = (event) => {
	this.setState({
		[event.target.name]: event.target.value
	})	
}

handleCreate = async (event) => {
	event.preventDefault()
	this.createGoal(this.state)//see landingPage

}

//is there anywhere where components are rendered on a click? 
	// put this after the close icon once defined: onClose={this.props.closeModal}

render(){
	console.log("here is this.props in render() in NewGoalContainer");
	console.log(this.props);
	console.log("these are goals", this.state.goals);

	return(
	<Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
    	<Header>Create a Goal: </Header>
    	<Modal.Content>
			<form onSubmit={this.handleCreate}>
				<input
				type="text"
				name="title"
				placeholder="goal_title"
				value={this.state.title}
				onChange={this.handleChange}
				/>
				<input
				type="checkbox"
				name="complete"
				value={this.state.complete}
				onChange={this.handleChange}
				onClick={this.handleStatus}
				/>
				<button>temp. btn</button>
			</form>
			
			<GoalList compileGoals={this.state.goals}/>

		</Modal.Content>
		</Modal>
		)
	}
}

export default NewGoalContainer