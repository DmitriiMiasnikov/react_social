import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import { changeTextInput, login, logout } from '../../state/authReducer';

class LoginContainer extends React.Component {
  componentDidMount() {
  }
  onSubmit = (data) => {
    return this.props.login(data.login, data.password, data.rememberme ? data.rememberme[0] : false)
  };
  validate = (data) => {
    const err = {};
    if (!data.login) err.login = 'Введите имя'
    if (!data.password) err.password = 'Введите пароль'
    if (data.password && data.password.length > 10 ) err.password = 'Макс пароль 10 знаков'
    if (!data.repeatPassword) {
      err.repeatPassword = 'Повторите пароль'
    } else if (data.password !== data.repeatPassword) err.repeatPassword = 'Не совпадает пароль'
    this.props.changeTextInput(data)
    return err
  }
  render = () => {
    return <Login isAuth={this.props.isAuth} onSubmit = {this.onSubmit} validate = {this.validate}/>
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {
  changeTextInput,
  login,
  logout
})(LoginContainer);