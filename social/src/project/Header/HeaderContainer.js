import React from 'react';
import Header from './Header'
import { logout } from './../../state/authReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUserProfile } from './../../state/profileReducer'

class HeaderContainer extends React.Component {
  getProfile = (id) => {
    return this.props.getUserProfile(id)
  }
  render() {
    return (
      <Header {...this.props} getProfile = {this.getProfile}/>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id
  }
}
export default compose(
  connect(mapStateToProps, { logout, getUserProfile }),
  withRouter
)(HeaderContainer);