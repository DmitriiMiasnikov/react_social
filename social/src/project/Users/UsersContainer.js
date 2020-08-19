import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import { setCurrentPage, getUsersThunk, followThunk } from '../../state/usersReducer';
import { getUsersDataSelector, getPageSize, getTotalUsersCount, 
  getCurrentPage, getIsFetching, getFollowingProgress } from './../../state/usersSelectors'

class UsersContainerInner extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk('didMount', this.props.currentPage, this.props.pageSize)
  }
  setCurrentPage = (page) => {
    this.props.getUsersThunk('setCurrentPage', page, this.props.pageSize)
  }
  render = () => {
    return <Users {...this.props} setCurrentPage = {this.setCurrentPage}/>
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: getUsersDataSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  }
}

export default connect(mapStateToProps, {
  setCurrentPage,
  getUsersThunk,
  followThunk
})(UsersContainerInner);