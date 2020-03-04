import React, { Component } from 'react'


function GoalList (props) {				
				
		const goals = props.goals.map((goal) => {		
			return(	
				goal.title
				)
		})		
return(		
	<Card.Group>		
		{goals}		
	</Card.Group>
		)		
}				
export default GoalList				