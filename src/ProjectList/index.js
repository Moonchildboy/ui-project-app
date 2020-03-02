import React, { Component } from 'react'
import { Card, Button, Form, Input } from 'semantic-ui-react'	
	
	//convert to a class component to emulate the EditDogModal
	class ProjectList extends Component {
		constructor(props){
			super(props)
			this.state ={

			}
		}
	render(){
		const projects = this.props.projects.map((project) => {
			return(
				<Card key={project.id} centered={true}>
					<h1>this is the project list</h1>
					<Card.Content>
						<Card.Header>
							<Input value={project.title}/>
							<Input value={project.start_date}/>
							<Input value={project.end_date}/>
							<Input value={project.status}/>
							<Input value={project.priority}/>
						</Card.Header>
					</Card.Content>
				</Card>)
		})

		return(
		    <Card.Group>
		      {projects}
		    </Card.Group>
	  )
	}
}
export default ProjectList