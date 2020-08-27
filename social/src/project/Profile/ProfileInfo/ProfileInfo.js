import React, { useState, useEffect } from 'react';
import styles from './ProfileInfo.module.scss';
import Loading from './../../../assets/Loading/Loading';
import maleUser from './../../../assets/img/male-user.png';
import StatusBarHooks from './StatusBar/StatusBarHooks';
import Description from './Description/Description'

const ProfileInfo = (props) => {
  const [changePhotoMode, setChangePhotoMode] = useState(false);
  const [friend, setFriend] = useState(props.isFriend);
  const activeMod = () => {
    changePhotoMode ? setChangePhotoMode(false) : setChangePhotoMode(true)
  }
  if (!props.profile || props.isFetching) {
    return <Loading isFetching={props.isFetching} />
  }
  const selectImg = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        <div>{props.profile.fullName}</div>
      </div>
      {
        props.mineProfile ? <StatusBarHooks status={props.status} updateStatus={props.updateStatus} /> : null
      }
      <div className={styles.avatar}>
        <img src={props.profile.photos.small === null ? maleUser : props.profile.photos.small}></img>
        {
          !props.mineProfile ? <div
            className={`${styles.button} ${friend ? styles.follow : ''}`}
            onClick={() => { 
              friend ? props.unfollowThunk(props.profile.userId) : props.followThunk(props.profile.userId) 
              setFriend(!friend)
            }
            }>
            {friend ? 'follow' : 'unfollow'}
          </div> : null
        }
      </div>
      <div className={styles.changePhotoBlock}>
        {
          props.mineProfile ? <div className={styles.changePhoto}>
            <div onClick={activeMod} className={styles.clicableText}>click to change photo</div>
            {changePhotoMode ?
              <input type={'file'} onChange={selectImg} ></input>
              : null}
          </div>
            : null
        }
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
      <Description
        profile={props.profile}
        mineProfile={props.mineProfile}
        changeLookingForAJob={props.changeLookingForAJob} />
    </div>
  );
}
export default ProfileInfo;