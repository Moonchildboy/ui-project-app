import React, { Component } from 'react'

import { Doughnut, Line, Gantt } from 'react-chartjs-2';

class GoalContainer extends Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div>
				<h1>this is the Goal (CRUD) Container</h1><small>will contain gantt</small>
			</div>
			)
	}
}

export default GoalContainer