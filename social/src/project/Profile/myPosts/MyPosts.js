import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.postsData.map((el, i) => {
    return <Post message={el.message} likesCount={el.likesCount} id={el.id} textPic='pic' key={i} />
  }),
    newPostElement = React.createRef();
  return (
    <div className={styles.postBlock}>
      <div className={styles.title}>
        My posts
        </div>
      <div className={styles.inputBlock}>
        <textarea ref={newPostElement} value={props.newPostText} 
          onChange={() => {props.updateNewPost(newPostElement.current.value)}}></textarea>
        <button onClick={() => props.addPost()}>send message</button>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;