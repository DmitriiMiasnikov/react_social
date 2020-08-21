import React from 'react';
import styles from './Friends.module.scss';
import maleUser from './../../../assets/img/male-user.png';
import { NavLink } from 'react-router-dom'

const Friends = (props) => {
  return (
    <div className={styles.friends}>
      <div className={styles.title}>Friends:</div>
      <div className={styles.wrapper}>
        {
          props.friendsData ? props.friendsData.map((el, i) => {
            return <NavLink to={`/profile/${el.id}`} key={i} onClick={() => props.getProfile(el.id)}>
            <div className={styles.item}>
              <div className={styles.avatar} >
                <img src={el.photos.small === null ? maleUser : el.photos.small}></img>
              </div>
              <div className={styles.name} >{el.name.slice(0, 5)}</div>
            </div>
            </NavLink>
          }) : null
        }
      </div>
    </div>
  );
}
export default Friends;