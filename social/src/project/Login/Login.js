import React from 'react';
import styles from './Login.module.scss';
import { Form, Field } from 'react-final-form'

const LoginForm = () => {
  const onSubmit = () => {
    return console.log('submit')
  }, validate = () => {
    return console.log('validate')
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.line}>
            <label>Логин: </label>
            <Field name='login' placeholder='Login' component='input' />
          </div>
          <div className={styles.line}>
            <label>Пароль: </label>
            <Field name='password' placeholder='Password' component='input' />
          </div>
          <div className={`${styles.line} ${styles.checkbox}`}>
            <label></label>
            <label>
              <Field name='check' value='Запомнить меня' component='input' type='checkbox' />
            Запомнить меня</label>
          </div>
          <div className={`${styles.line} ${styles.button}`}>
            <button type='submit'>Login</button>
          </div>
        </form>
      )}
    />
  )
}

const Login = (props) => {
  return <div className={styles.wrapper}>
    <div className={styles.title}>Регистрация:</div>
    <LoginForm />
  </div>
}

export default Login;