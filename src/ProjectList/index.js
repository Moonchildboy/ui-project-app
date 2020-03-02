import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'	
	
	function ProjectList(props) {
		let colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]
		const projects = props.projects.map((project) => {
			let color = colors[Math.floor(Math.random() * colors.length) - 1]
		return(
			<Card key={project.id} centered={true} color={color} >
			<h1>this is the project list</h1>
				<Card.Content>
					<Card.Header>
						{project.title}
						{project.start_date}
						{project.end_date}
						{project.status}
						{project.priority}
					</Card.Header>
				</Card.Content>
			</Card>
	)
	})
return(
    <Card.Group>
      {projects}
    </Card.Group>
  )
}
export default ProjectList