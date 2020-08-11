import React from 'react';
import Header from './Header'
import { leftLogin, authLogin, authUserThunk } from './../../state/authReducer'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUserThunk()
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
export default connect(mapStateToProps, {leftLogin, authLogin, authUserThunk })(HeaderContainer);