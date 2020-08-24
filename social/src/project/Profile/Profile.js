import React from 'react';
import styles from './Profile.module.scss';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        title of content
      </div>
      <ProfileInfo profile={props.profile} status={props.status} 
        updateStatus={props.updateStatus} isFetching = {props.isFetching} 
        mineProfile={props.mineProfile} savePhoto = {props.savePhoto}
        changeLookingForAJob={props.changeLookingForAJob}/>
      <MyPostsContainer />
    </div>
  );
}
export default Profile;