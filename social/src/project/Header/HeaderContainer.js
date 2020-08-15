import React from 'react';
import Header from './Header'
import { logout, authLogin, getAuthUserData } from './../../state/authReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }
  render() {
    return (
      <Header {...this.props} />
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
  connect(mapStateToProps, {logout, authLogin, getAuthUserData }),
  withRouter
)(HeaderContainer);