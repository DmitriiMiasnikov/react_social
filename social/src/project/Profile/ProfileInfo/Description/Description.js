import React, { useState, useEffect } from 'react';
import styles from './Description.module.scss';

const Description = (props) => {
    console.log(props.profile)
    const [lookingForAJob, setLookingForAJob] = useState(props.profile.lookingForAJob);
    const [editMode, setEditMode] = useState(false);
    const [aboutMe, setaboutMe] = useState(props.profile.aboutMe);
    useEffect(() => {
        setaboutMe(props.profile.aboutMe)
    }, [props.profile.aboutMe])
    useEffect(() => {
        setLookingForAJob(props.profile.lookingForAJob)
    }, [props.profile.lookingForAJob])
    const activateInput = () => {
        setEditMode(true)
    }
    const deactivateInput = () => {
        setEditMode(false)
    }
    const changeAboutMe = (e) => {
        setaboutMe(e.currentTarget.value)
    }
    const changeLookingForAJob = () => {
        lookingForAJob ? setLookingForAJob(false) : setLookingForAJob(true)
    }
    return (
        <div className={styles.description}>
            <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            {props.mineProfile ? <div onClick = {changeLookingForAJob} className={styles.editBlock}>change</div> : null}
            <br></br>
            <b>About me:</b> {props.profile.aboutMe}
            {props.mineProfile ? <div onClick={activateInput} className={styles.editBlock}>
                {editMode ? <input onBlur={deactivateInput} autoFocus={true} onChange={changeAboutMe}>
                </input> : 'edit'}
            </div> : null}
            <br></br>
            <b>Contacts: </b>
            <div className={styles.contacts}>
                {Object.keys(props.profile.contacts).map((el, i) =>
                    <div key={i}>{el}: {Object.values(props.profile.contacts)[i]}</div>)}
            </div>
        </div>
    )
}
export default Description;