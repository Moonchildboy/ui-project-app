import React from 'react'
import { List } from 'semantic-ui-react'
import GoalGridContainer from '../GoalGridContainer'


function GoalList (props) {				
	//after creating a "view goal btn" in ProJect Card, use {goal.title} to list goals				
		const goals = props.compileGoals.map((goal) => {// props coming from NewGoalContainer << should compileGoals take a param and a body? 	
			// console.log("this is goal in GoalList", goal);
			return(	
				<List key={goal.id}>
					<GoalGridContainer rowValue={goal} updateGoal={props.updateGoal} delete={props.deleteGoal}/>
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