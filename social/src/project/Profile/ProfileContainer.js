import React from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto, changeLookingForAJob } from './../../state/profileReducer';
import { isFriendThunc, toggleFollow } from './../../state/menuReducer';
import { followThunk, unfollowThunk } from './../../state/usersReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AuthRedirect } from './../../hoc/AuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  getUser = () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.currentLogin;
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
    this.props.isFriendThunc(userId)
  }

  componentDidMount() {
    this.getUser();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.getUser();
    }
  }
  
  render() {
    return (
      <Profile {...this.props} 
        mineProfile={!this.props.match.params.userId || this.props.match.params.userId == this.props.currentLogin}/>
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
    isFriend: state.menu.isFriend,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, 
    changeLookingForAJob, isFriendThunc, unfollowThunk, followThunk, toggleFollow }),
  withRouter,
  AuthRedirect,
)(ProfileContainer);