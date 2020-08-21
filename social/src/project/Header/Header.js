import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className = {styles.header}>
       <div className = {styles.loginBlock}>
        {
          props.isAuth ? <div><NavLink to={`/profile/${props.id}`} onClick={() => props.getProfile(props.id)}>{props.login}</NavLink>
          <NavLink to ='/login' onClick = {() => props.logout()} className = {styles.left}>left</NavLink></div> : 
          <NavLink to = {`/login`} >login</NavLink>
        }
      </div>
      </header>
    );
}
export default Header;