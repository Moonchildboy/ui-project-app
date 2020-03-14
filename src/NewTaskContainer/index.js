import React, { Component } from 'react'
import { Button, Form, Input, Modal, Header } from 'semantic-ui-react'


class NewTaskContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			tasks: []
		}
	}

	createTask = async (newTask) => { /*pass as props to a handleCreate ƒ(), in
										this cntainer, that will then be passed 
										to onSubmit={} from NewGoalContainer. 
										Or, hard code this input in the parent 
										with an independent onSubmit. */
	  try{
	    const createTaskResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/Task/', {
	        method: 'POST',
	        credentials:'include',
	        body: JSON.stringify(newTask), // this is how you convert an object to JSON
	        headers: {
	          'Content-Type': 'application/json'
	        }
	    })
	    const createTaskJson = await createTaskResponse.json()
	    // this.compileTasks()
	    if(createTaskResponse.status === 201) {

	      // const newArr = this.state.tasks
	      // newArr.push(createTaskJson.data)
	      this.setState({
	          // tasks: newArr
	          tasks: [...this.state.tasks, createTaskJson.data]
	        })
	    }
	  } catch(err){
	    console.error(err);
	  }
	}

	render(){
		return(
			//<Form onSubmit={this.createTask}>
				<Input
				type="text"	
				name="task"
				//value={this.state.title}
				placeholder="list tasks"
				//onChange={this.handleChange}
				/>
			//</Form>
			)
	}
}
export default NewTaskContainer