import React from 'react'
import { Card } from 'semantic-ui-react'
import ProjectCard from '../ProjectCard'	
	//TRACKING PROPS:
		/*
				App.js <<<<------ update={props.updateProject}
				App.js <<<<------ delete={props.deleteProject}
		*/ 
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