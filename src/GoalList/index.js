import React, { Component } from 'react'
import { Card, Button, Form, Input, Select, Modal, Header, List } from 'semantic-ui-react'



function GoalList (props) {				
				
		const goals = props.compileGoals.map((goal) => {		
			return(	
				<List key={goal.id}>
					{goal.title}
				</List>
				)
		})		
return(		
			<div>
				{goals}
			</div>
		)		
}				
export default GoalList				