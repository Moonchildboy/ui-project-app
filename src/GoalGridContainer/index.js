import React, { Component } from 'react'									
import { Card, Button, Form, Input, Checkbox, Grid } from 'semantic-ui-react'									
// import GoalList from '../GoalList'
import NewTaskContainer from '../NewTaskContainer'

									
class GoalGrid extends Component {									
constructor(props) {									
super(props)									
this.state = {									
		title:'',							
		complete:'',//should contain an arrary of dates							
		goal: props.rowValue.id,
		seeTasks: false											
	}									
}									
									
componentDidMount() {									
	this.mapPropsToState()								
}									
									
handleChange = (event) => {
	console.log('event.target.name >>> ', event.target.name);									
	console.log('event.target.value	 >>> ', event.target.value);

	
	let value = event.target.value

	if (event.target.name === 'complete'){
		if (value === 'on'){
			value = 'off'
		}else{
			value = 'on'
		}
	}	

	this.setState({								
		[event.target.name]: value							
	})								
}
									
mapPropsToState = () => {

	let complete
	if (this.props.rowValue.complete){
		complete = 'on'
	}
	else{
		complete = 'off'
	}

	this.setState({								
		title: this.props.rowValue.title,							
		// goal: this.props.goalValue.title							
		complete: complete,	//work						
		//project: this.props.rowValue.end_date,													
	})								
}									

addTask = () => {
	this.setState({
		seeTasks:true
	})
	console.log("this is seeTasks before", this.state.seeTasks);
}	

render(){
	//key={this.state.id} <<-place back in "Card" on error	
	//onSubmit={this.handleSubmit} <<--place back in Form on error...create a handle submit ƒ()					
	//<Button onClick={() => this.associateGoal(this.state.id)}> +Add Goals </Button>			
		//<NewTaskContainer />
		return (							
			<Form >						
				<Grid centered={true}>				
					<Grid.Column>			
						<Card.Header>		
							<Input
								type="text"	
								name="title"
								value={this.state.title}
								onChange={this.handleChange}/>
								<Button onClick={() => this.addTask()}>Add Task</Button>
						</Card.Header>
						<Checkbox
							type="checkbox"	
							name="complete"
							value={this.state.complete}
							checked={this.state.complete === 'on'}
							onChange={this.handleChange}/>
						<Button onClick={()=> this.props.updateGoal(this.state)}>update</Button>		
						<Button onClick={()=> this.props.delete(this.state.goal)}>delete</Button>		
					</Grid.Column>										
				</Grid>				
			</Form>					
			);													
	}								
}									
									
export default GoalGrid;									