import React from 'react';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';

const MenuItem = (props) => {
  return (
    <NavLink to={`/${props.to}`} activeClassName={styles.active}>
      <div className={styles.item}>
        {props.to[0].toUpperCase() + props.to.slice(1)}
      </div>
    </NavLink>
  )
}

const Menu = (props) => {
  const menuElements = props.menuItems.map((el, i) => <MenuItem to={el.link} key={i} />);
  return (
    <nav className={styles.nav}>
      {menuElements}
      <FriendsContainer />
    </nav>
  );
}
export default Menu;