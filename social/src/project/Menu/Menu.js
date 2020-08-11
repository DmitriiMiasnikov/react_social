import React from 'react';
import styles from './Menu.module.scss';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';

const MenuItem = (props) => {
  return (
    <NavLink to = {`/${props.to}`} activeClassName = {styles.active}>
    <div className = {styles.item}>
      {props.to[0].toUpperCase() + props.to.slice(1)}
    </div>
    </NavLink>
  )
}

const Menu = (props) => {
  const menuItems = [
    {id: 1, link: 'profile'},
    {id: 2, link: 'dialogs'},
    {id: 3, link: 'users'},
    {id: 4, link: 'music'},
    {id: 5, link: 'news'},
    {id: 6, link: 'settings'}
  ],
  menuElements = menuItems.map((el, i) => <MenuItem to = {el.link} key={i} /> );
    return (
      <nav className = {styles.nav}>
        {menuElements}
        <Friends store = { props.store}/>
      </nav>
    );
}
export default Menu;