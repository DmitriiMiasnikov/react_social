import React from 'react';
import styles from './Dialogs.module.scss';
import { NavLink, Route, Redirect } from 'react-router-dom';

const Dialogs = (props) => {
  const dialogsElements = props.dialogsData.map((el, i) => {
    return (
      <NavLink to={`/dialogs/${el.id}`} key={i} ><div className={styles.item}>{el.name[0].toUpperCase() + el.name.slice(1)}</div></NavLink>
    )
  });
  const dialog = props.dialogsData.map((el, i) => {
    const messagesElements = props.dialogsData[el.id - 1].dialog.map((el, i) => {
      return (
        <div className={styles.item} key={i}>{el} </div>
      )
    }),
    newPostElement = React.createRef();
    return (
      <Route path={`/dialogs/${el.id}`} render={() => {
        return (
          <div>
          {messagesElements}
          <div className={styles.inputBlock}>
            <textarea ref={newPostElement} value = {props.newDialogMessage} 
              onChange = {() => {props.updateNewMessage(newPostElement.current.value);}}></textarea>
            <button onClick={() => { props.addMessage(el.id) }}>send message</button>
          </div>
        </div>
        )
      }} key={i} />
    )
  })

  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.collumn} ${styles.names}`}>
        <div className={styles.title}>My dialogs</div>
        {dialogsElements}
      </div>
      <div className={`${styles.collumn} ${styles.messages}`}>
        {dialog}
      </div>
    </div>
  );
}
export default Dialogs;