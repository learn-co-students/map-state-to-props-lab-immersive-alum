import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({users: state.users})

// connect this component to Redux
export default connect(mapStateToProps)(Users)
