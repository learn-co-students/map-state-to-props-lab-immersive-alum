import React from 'react'

export default function User(props){
		console.log(props)

	return(
		<li>
		{props.user.userName} - {props.user.hometown}
		</li>
	)
}