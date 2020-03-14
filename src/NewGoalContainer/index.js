import React, { Component } from 'react'
import { Button, Form, Input, Modal, Header } from 'semantic-ui-react'
// import { Doughnut, Line, Gantt } from 'react-chartjs-2';
// import ProjectCard from '../ProjectCard'
// import GoalGridContainer from '../GoalGridContainer'
import GoalList from '../GoalList'
//look into styling semantic

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

	// console.log('this.props >>>', this.props);


	const body = {
		title: this.state.title,
		complete: this.state.complete,
		project: this.props.project.id
	}

	// console.log("calling the createGoal function", newGoal);
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
		// console.log(createGoalJson);
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

deleteGoal = async (id) => {
	console.log("this is the deleteGoal", id);
	try{
		const url = await fetch(process.env.REACT_APP_API_URL + "/api/v1/goal/" + id, {
			method: 'DELETE',
			credentials: 'include'
		})
		const deleteGoalJson = await url.json()
		if (deleteGoalJson.status === 200) {
			this.setState({
				goals: this.state.goals.filter(goal => goal.id !== id)
			})
		} else {
			throw new Error('could not delete')
		}
	} catch (err){
		console.error(err);
	}
}

updateGoal = async (newValue) => {
	console.log("in updateGoal!", newValue)
	let status
	if(newValue.complete === 'on'){
		status = true
	} else {
		status = false	
	} 
	newValue.complete = status

	try {
		const updateGoalResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/goal/" + newValue.goal,  
		{
			method: 'PUT',
			credentials: 'include',
			body: JSON.stringify(newValue),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const updatedGoalJson = await updateGoalResponse.json();

		console.log("updatedGoalJson >>> ",updatedGoalJson);
		// this.compileGoals()
		if(updateGoalResponse.status === 200) {
			const newGoalArrayWithUpdatedGoal = this.state.goals.map((goal) => {
				if(goal.id === this.state.idOfGoalToEdit) {
					return updatedGoalJson.data
				} else {
					return goal
				}
			})
			this.setState({
				goals: newGoalArrayWithUpdatedGoal
			})
		}
	} catch(err) {
		console.error(err)
	}
}

compileGoals = async () => {
	const url = process.env.REACT_APP_API_URL + '/api/v1/goal/' + this.props.project.id //concat included at Reuben's assist
	try{
		const goalResponse = await fetch(url, {
			method:'GET',
			credentials:'include',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const goalJson = await goalResponse.json()
		console.log("goalJson from compileGoals inside NewGoalContainer:", goalJson)
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

addTask = () => {
	this.setState({
		seeTasks:true
	})
}
//is there anywhere where components are rendered on a click? 
	// put this after the close icon once defined: onClose={this.props.closeModal}

render(){
	console.log("here is this.props in render() in NewGoalContainer");
	console.log(this.props);
	console.log("these are goals", this.state.goals);
	const goalList=this.state.goals.length?<GoalList compileGoals={this.state.goals} updateGoal={this.updateGoal} deleteGoal={this.deleteGoal}/>:<p>no goals yet</p>
	return(
	<Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
    	<Header className="goal-modal">{this.props.project.title} </Header>
	    	<Modal.Content>
				<Form onSubmit={this.handleCreate}>
					<Input
					type="text"
					name="title"
					placeholder="add a goal"
					value={this.state.title}
					onChange={this.handleChange}
					/>
					<Button>➕</Button>
				</Form>
				{goalList}
			</Modal.Content>
		</Modal>
		)
	}
}

export default NewGoalContainer