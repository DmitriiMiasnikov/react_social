import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import { setCurrentPage, getUsersThunk, followThunk } from '../../state/usersReducer';

class UsersContainerInner extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk('didMount', this.props.currentPage, this.props.pageSize)
  }
  setCurrentPage = (page) => {
    this.props.getUsersThunk('setCurrentPage', page, this.props.pageSize)
  }
  render = () => {
    return <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      setCurrentPage={this.setCurrentPage}
      usersData={this.props.usersData}
      isFetching={this.props.isFetching}
      followingProgress={this.props.followingProgress}
      followThunk = {this.props.followThunk}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingProgress: state.users.followingProgress,
  }
}

export default connect(mapStateToProps, {
  setCurrentPage,
  getUsersThunk,
  followThunk
})(UsersContainerInner);