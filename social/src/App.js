import React from 'react';
import styles from './App.module.css';
import HeaderContainer from './project/Header/HeaderContainer';
import Menu from './project/Menu/Menu';
import ProfileContainer from './project/Profile/ProfileContainer';
import DialogsContainer from './project/Dialogs/DialogsContainer';
import UsersContainer from './project/Users/UsersContainer';
import LoginContainer from './project/Login/LoginContainer';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { initApp } from './state/appReducer';
import { compose } from 'redux';
import Loading from './assets/Loading/Loading';

class App extends React.Component {
  componentDidMount() {
    this.props.initApp()
  }
  render() {
    if (!this.props.initUser) return <Loading />
    return (
      <div className={styles.wrapper}>
        <HeaderContainer />
        <Menu menuItems={this.props.menuItems} friendsData={this.props.friendsData} />
        <div className={styles.content}>
          <Redirect from="/" to="/profile" />
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
          <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/Users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initUser: state.app.initUser,
    menuItems: state.menu.menuItems,
    friendsData: state.menu.friendsData
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, { initApp }),
)(App);
