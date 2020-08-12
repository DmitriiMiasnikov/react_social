import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import { sendRegistrationData, changeTextInput } from '../../state/authReducer';

class LoginContainer extends React.Component {
  componentDidMount() {

  }
  render = () => {
    return <Login {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {
  sendRegistrationData,
  changeTextInput
})(LoginContainer);