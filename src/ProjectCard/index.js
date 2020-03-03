import React, { Component } from 'react'
import { Card, Button, Form, Input } from 'semantic-ui-react'	


class ProjectCard extends Component {
  constructor() {
    super()
    this.state = {
		 title:'',
		 start_date:'',//should contain an arrary of dates
		 end_date:'',
		 //look for exps. of working w dates
		 status:'',//will be an arry of predetermined values
		 priority:''
    }
  }

// componentDidMount() {						
// 	this.setState({						
// 		title:  this.props.projectToEdit.title,						
// 		start_date:  this.props.projectToEdit.start_date,						
// 		end_date:  this.props.projectToEdit.end_date						
// 		status:  this.props.projectToEdit.status						
// 		priority:  this.props.projectToEdit.priority						
// 	})						
// }						
						
handleChange = (event) => {						
	this.setState({
		[event.target.name]: event.target.value						
	})						
}									

						
render(){						
console.log(this.props);						
return (						
		<Form onSubmit={this.handleSubmit}>
					<Card key={this.props.cardValue.id} centered={true}>
						<h1>this is the project list</h1>
						<Card.Content>
							<Card.Header>
								<Input 
									value={this.props.cardValue.title} 
									onChange={this.handleChange}/>
								<Input 
									value={this.props.cardValue.start_date} 
									onChange={this.handleChange}/>
								<Input 
									value={this.props.cardValue.end_date} 
									onChange={this.handleChange}/>
								<Input 
									value={this.props.cardValue.status} 
									onChange={this.handleChange}/>
								<Input 
									value={this.props.cardValue.priority} 
									onChange={this.handleChange}/>
							</Card.Header>
						</Card.Content>
						<Button>Update</Button>
						<Button>Delete</Button>
					</Card>
				</Form>
			);			
	}					
}						
						
export default ProjectCard;						