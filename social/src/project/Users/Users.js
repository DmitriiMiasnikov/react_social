import React from 'react';
import styles from './Users.module.scss';
import maleIcon from './../../assets/img/male-user.png'
import Loading from './../../assets/Loading/Loading'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = props.currentPage > 3 ? props.currentPage - 3 : 1; i <= props.currentPage + 3; i++) {
    pages.push(i);
  }
  return <div className={styles.wrapper}>
    <div className={styles.pages}>
      {
        pages.map(el => {
          return <div className={`${props.currentPage === el ? styles.selected : ''} ${styles.pages}`} 
            key={el} onClick={() => props.setCurrentPage(el)}>{el}</div>
        })
      }
      <div className={styles.dots}>...</div>
    </div>
    <div className = {styles.loading}>
    { props.isFetching ? <Loading /> : null}
    </div>
    {
      props.usersData.map(el => {
        return (
          <div key={el.id} className={styles.user}>
            <div className={styles.avatar}>
              <NavLink to={`./profile/${el.id}`}>
                <img src={el.photos.small !== null ? el.photos.small : maleIcon} className={styles.icon}></img>
              </NavLink>
              <div disabled={props.followingProgress.some(id => id === el.id)}
                className={`${styles.button} ${el.followed ? styles.follow : ''}`}
                onClick={() => { props.followThunk(el.id) }
                }>
                {el.followed ? 'follow' : 'unfollow'}
              </div>
            </div>
            <div className={styles.mainBlock}>
              <NavLink to={`./profile/${el.id}`}><div className={styles.name}>{el.name} </div></NavLink>
              <div className={styles.status}>{el.status} </div>
            </div>
          </div>
        )
      })
    }
  </div>

}

export default Users;