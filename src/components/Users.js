import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User'

export class Users extends Component {

  render() {
  	const userList= this.props.users.map( (user, index) => <User key={index} user={user}/> )
    return (
      <div>
        <ul>
          {userList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	console.log(state)
	return {users: state.users}
}
export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?

