import React, { Component } from 'react'


class EditProjectContainer extends Component {
  constructor() {
    super()
    this.state = {
		 title:'',
		 start_date:'',//should contain an arrary of dates
		 end_date:'',
		 //look for exps. of working w dates
		 status:'',//will be an arry of predetermined values
		 priority:
    }
  }

componentDidMount() {						
	this.setState({						
		title:  this.props.projectToEdit.title,						
		start_date:  this.props.projectToEdit.start_date,						
		end_date:  this.props.projectToEdit.end_date						
		status:  this.props.projectToEdit.status						
		priority:  this.props.projectToEdit.priority						
	})						
}						
						
handleChange = (event) => {						
	this.setState({
		[event.target.name]: event.target.value						
	})						
}						
						
handleSubmit = (event) => {
	event.preventDefault()
	this.props.updateProject(this.state)						
}						
						
render(){						
console.log(this.state);						
return (						
		<div>				
		<h1> This is the Intake Container</h1>				
			<form onSubmit={this.handleSubmit}>			
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
						
export default EditProjectContainer;						