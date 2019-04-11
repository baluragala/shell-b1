import React from "react";
import { getUsers } from "../actionCreators/user";
import { connect } from "react-redux";

class Users extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.users.map(u => (
          <p>{u.email}</p>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.userState.users,
    isLoading: state.userState.isLoading
  };
}

export default connect(mapStateToProps)(Users);
