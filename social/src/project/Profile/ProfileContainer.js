import React from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from './../../state/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AuthRedirect } from './../../hoc/AuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.currentLogin;
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  
  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    currentLogin: state.auth.id,
    isAuth: state.auth.isAuth,
    status: state.profile.status,
    isFetching: state.profile.isFetching,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  AuthRedirect
)(ProfileContainer);