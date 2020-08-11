import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import {  } from '../../state/authReducer';

class LoginContainer extends React.Component {
  componentDidMount() {

  }
  render = () => {
    return <Login />
  }
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {

})(LoginContainer);