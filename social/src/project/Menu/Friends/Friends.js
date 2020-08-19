import React from 'react';
import styles from './Friends.module.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {
  const FriendsList = props.friendsData.map((el, i) => {
    return (
      <Friend name={el.name} key={i} />
    )
  })
  return (
    <div className={styles.friends}>
      <div className={styles.title}>Friends:</div>
      <div className={styles.wrapper}>
        {FriendsList}
      </div>
    </div>
  );

}
export default Friends;