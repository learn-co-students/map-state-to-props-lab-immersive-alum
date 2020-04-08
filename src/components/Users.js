import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

	render() {
		return (
			<div>
				<ul>
					Users:
					{this.props.users.map(user => {
						return(
							<li>
								{user.username}, from {user.hometown}.
							</li>
						)
					})}
					<br/>
					Number of users: {this.props.users.length}
				</ul>
			</div>
		)
	}
}

//add mapStateToProps here
const mapStateToProps = (store) => {
	return {users: store.users}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);