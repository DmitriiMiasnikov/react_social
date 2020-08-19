import React from 'react';
import styles from './ProfileInfo.module.scss';
import Loading from './../../../assets/Loading/Loading';
import maleUser from './../../../assets/img/male-user.png';
import StatusBarHooks from './StatusBar/StatusBarHooks'

const ProfileInfo = (props) => {
  if (!props.profile || props.isFetching) {
    return <Loading isFetching = {props.isFetching} />
  }
  return (
    <div className = {styles.wrapper}>
      <div className={styles.name}>{props.profile.fullName}</div>
      <StatusBarHooks status = {props.status} updateStatus={props.updateStatus}/>
      <div className={styles.avatar}>
        <img src = {props.profile.photos.small === null ? maleUser : props.profile.photos.small}></img>
              </div>
      <div className={styles.text}>
        {props.profile.aboutMe}
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
    </div>
  );
}
export default ProfileInfo;