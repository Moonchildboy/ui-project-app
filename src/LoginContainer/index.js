import React, { Component } from 'react'

class LoginContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:''
		}
	}

handleChange = (event) => {
	this.setState({
		[event.target.name]: event.target.value
	})	
}
	
handleSubmit = (event) => {
	event.preventDefault()
	this.props.login(this.state)
}
render(){
	console.log(this.state);
	return(
		<div>
		<h1>this is the Login Container</h1>
			<form onSubmit={this.handleSubmit}>
				<input
				type="text"
				name="username"
				placeholder="username"
				value={this.state.username}
				onChange={this.handleChange}
				/>
				<input
				type="password"
				name="password"
				placeholder="password"
				value={this.state.password}
				onChange={this.handleChange}
				/>
				<button>Login</button>
			</form>
		</div>
		)
	}
}
export default LoginContainer