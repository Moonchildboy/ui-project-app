import React, { Component } from 'react'
import { Card, Button, Form, Input } from 'semantic-ui-react'
import ProjectCard from '../ProjectCard'	
	
	//convert to a class component to emulate the EditDogModal
function ProjectList (props) {

		const projects = props.projects.map((project) => {
			return(
				<ProjectCard key={project.id} cardValue={project} update={props.updateProject} delete={props.deleteProject}/>
				)
		})
		return(
		    <Card.Group>
		      {projects}
		    </Card.Group>)
}
export default ProjectList