// The FKA IntakeContainer should pass project data to the backend using a grid of forms

	// get data using a form
	// users should hit the create and update route << can a component do multiple things? 

import React, { Component } from 'react'


class NewProjectContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			 title:'',
			 start_date:'',//should contain an arrary of dates
			 end_date:'',
			 //look for exps. of working w dates
			 status:'',//will be an arry of predetermined values
			 priority:''
			 // user:''
		}
	}

handleChange = (event) => {
	this.setState({
		[event.target.name]: event.target.value
	})	
}

handleCreate = async (event) => {
	event.preventDefault()
	this.props.createProject(this.state)//see landingPage
	this.setState({
		title:'',
		start_date:[],//use setState to push an array of dates as options for select 
		end_date:[],//should both of these arrays create a combined array
		status:'',
		priority:''
	})
}

// handleUpdate = async (event) => { //onDblClick
// 	event.preventDefault()

// 	this.props.updateProject(this.state)//
// }

//dynamically create a list of dates

// dynamically create jsx options tags

render(){
console.log(this.state);	
return (
		 <div>
		   <h1> This is the Intake Container</h1>
	   		<form onSubmit={this.handleCreate}>
				<input
				type="text"
				name="title"
				placeholder="project_title"
				value={this.state.title}
				onChange={this.handleChange}
				/>
				<label><small>start:</small>
					<input
						type="date"
						name="start_date"
						value={this.state.start_date}
						onChange={this.handleChange}
					/>
				</label>
				<label><small>end:</small>
					<input
						type="date"
						name="end_date"
						value={this.state.end_date}
						onChange={this.handleChange}
				/>
				</label>
				<select 
				type="text"
				name="status"
				placeholder="status(<select>)"
				value={this.state.status}
				onChange={this.handleChange}>
					<option>Not Started</option>
					<option>In Progress</option>
					<option>Tentative</option>
					<option>Completed</option>
					<option>Ongoing</option>
					<option>Canceled</option>
				</select>
				<select
				type="text"
				name="priority"
				placeholder="priority(<select>)"
				value={this.state.priority}
				onChange={this.handleChange}
				>
					<option>High</option>
					<option>Medium</option>
					<option>Low</option>
					<option>Canceled</option>
				</select>

				<button>submit project</button>
			</form>
				<button>add goal</button>

		 </div>
  			);
	}
} 

export default NewProjectContainer;