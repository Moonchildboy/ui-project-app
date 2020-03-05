import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'


class RegisterComponent extends Component {//use semantic elements
	constructor(props){
		super(props)
		this.state={
			username:"",
			email:"",
			password:""
		}
	}

handleChange = (event) => {
	this.setState({
		[event.target.name]: event.target.value
	})
}

handleSubmit = (event) => {
	event.preventDefault(event)
	this.props.register(this.state)
}

render(){
	return (
		<div>
			<h1>This is the register form</h1>
				<Form onSubmit={this.handleSubmit}>
					<Input
						type="text"
						name="username"
						value={this.state.username}
						placeholder="username"
						onChange={this.handleChange}
					/>
					<Input
						type="text"
						name="email"
						value={this.state.email}
						placeholder="email"
						onChange={this.handleChange}
					/>
					<Input
						type="password"
						name="password"
						value={this.state.password}
						placeholder="password"
						onChange={this.handleChange}
					/>
					<Button>Register</Button>
				</Form>
		</div>
		)
	}
}
export default RegisterComponent