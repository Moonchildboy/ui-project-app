import React, { Component } from 'react'
import { Card, Button, Form, Input } from 'semantic-ui-react'
import ProjectCard from '../ProjectCard'	
	
	//convert to a class component to emulate the EditDogModal
class ProjectList extends Component {


	render(){

		const projects = this.props.projects.map((project) => {
			return(
				<ProjectCard key={project.id} cardValue={project}/>
				)
		})
		return(
		    <Card.Group>
		      {projects}
		    </Card.Group>)
	}
}
export default ProjectList