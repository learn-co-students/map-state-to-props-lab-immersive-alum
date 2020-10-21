import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    let renderUsers = () => {
      return this.props.users.map((user, index) => (
        <li key={index}>{user.username}</li>
      ));
    };

    return (
      <div>
        <ul>
          Users!
          {renderUsers()}
          {this.props.userCount}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

export default connect(mapStateToProps)(Users);
