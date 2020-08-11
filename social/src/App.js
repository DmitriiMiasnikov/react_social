import React from 'react';
import styles from './App.module.css';
import HeaderContainer from './project/Header/HeaderContainer';
import Menu from './project/Menu/Menu';
import ProfileContainer from './project/Profile/ProfileContainer';
import DialogsContainer from './project/Dialogs/DialogsContainer';
import UsersContainer from './project/Users/UsersContainer';
import LoginContainer from './project/Login/LoginContainer';
import News from './project/News/News';
import Music from './project/Music/Music';
import Settings from './project/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <HeaderContainer />
        <Menu store = {props.store}/>
        <div className={styles.content}>
          <Route  path='/Dialogs' render={() => <DialogsContainer />} />
          <Route  path='/Profile/:userId?' render={() => <ProfileContainer />} />
          <Route  path='/Users' render={() => <UsersContainer />} />
          <Route  path='/login' render={() => <LoginContainer />} />
          <Route  path='/News' component={News} />
          <Route  path='/Music' component={Music} />
          <Route  path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
