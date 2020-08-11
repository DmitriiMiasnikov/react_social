import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className = {styles.post}>
      <div className = {styles.pic}>
        <div>
        {props.textPic}
        </div>
      </div>
      <div className = {styles.message}>
      {props.message}
      </div>
    </div>
  );
}
export default Post;