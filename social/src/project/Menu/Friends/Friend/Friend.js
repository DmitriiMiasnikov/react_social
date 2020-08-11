import React from 'react';
import styles from './Friend.module.scss';

const Friend = (props) => {
  return (
    <div className = {styles.item}>
      <div className={styles.avatar} >
      </div>
      <div className={styles.name} >{props.name}</div>
    </div>
  );
}
export default Friend;