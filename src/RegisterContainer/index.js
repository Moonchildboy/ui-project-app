import React, { Component } from 'react'
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react'


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
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="username"
						value={this.state.username}
						placeholder="username"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="email"
						value={this.state.email}
						placeholder="email"
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						value={this.state.password}
						placeholder="password"
						onChange={this.handleChange}
					/>
					<button>Register</button>
				</form>
		</div>
		)
	}
}
export default RegisterComponent