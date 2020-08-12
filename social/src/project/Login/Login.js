import React from 'react';
import styles from './Login.module.scss';
import { Form, Field } from 'react-final-form'

const LoginForm = (props) => {
  const onSubmit = (data) => {
    return props.sendRegistrationData(data)
  }, validate = (data) => {
    const err = {};
    if (!data.login) err.login = 'Введите имя'
    if (!data.password) err.password = 'Введите пароль'
    if (!data.repeatPassword) {
      err.repeatPassword = 'Повторите пароль'
    } else if (data.password !== data.repeatPassword) err.repeatPassword = 'Не совпадает пароль'
    props.changeTextInput(data)
    return err
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.line}>
            <Field name="login">
              {({ input, meta }) => (
                <div>
                  <label>Логин:</label>
                  <input {...input} type="text" placeholder="Login" />
                  {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className={styles.line}>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <label>Пароль:</label>
                  <input {...input} type="text" placeholder="Password" type='password' />
                  {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className={styles.line}>
            <Field name="repeatPassword">
              {({ input, meta }) => (
                <div>
                  <label>Повторите:</label>
                  <input {...input} type="text" placeholder="Password" type='password' />
                  {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className={`${styles.line} ${styles.checkbox}`}>
            <label></label>
            <div>
              <Field name='check' value='remember' component='input' type='checkbox' />
            Запомнить меня</div>
          </div>
          <div className={`${styles.line} ${styles.button}`}>
            <button type='submit' disabled={submitting}>Login</button>
            <button onClick={form.reset}>Clear forms</button>
          </div>
        </form>
      )}
    />
  )
}

const Login = (props) => {
  return <div className={styles.wrapper}>
    <div className={styles.title}>Регистрация:</div>
    <LoginForm {...props} />
  </div>
}

export default Login;