import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {

    const { users } = this.props;

    return (
      <div>
        <ul>
          {users.map(u => <li>{u.username}</li>)}
        </ul>
        {users.length}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
