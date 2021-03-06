import React from 'react';
import styles from './Users.module.scss';
import maleIcon from './../../assets/img/male-user.png'
import Loading from './../../assets/Loading/Loading'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = props.currentPage > 3 ? props.currentPage - 3 : 1;
    i >= pagesCount - 3 ? i <= pagesCount : i <= props.currentPage + 3;
    i++) {
    pages.push(i);
  }
  return <div className={styles.wrapper}>
    <div className={styles.pagesWrapper}>
      {
        props.currentPage > 4 ? <div className={styles.firstPageLink}>
          <div onClick={() => props.setCurrentPage(1)} className={styles.firstPage}>1</div>
          <div className={styles.dots}>...</div>
        </div> : null
      }
      {
        pages.map(el => {
          return <div className={`${props.currentPage === el ? styles.selected : ''} ${styles.pages}`}
            key={el} onClick={() => props.setCurrentPage(el)}>{el}</div>
        })
      }
      {
        props.currentPage < pagesCount - 3 ? <div className={styles.lastPageLink}>
          <div className={styles.dots}>...</div>
          <div onClick={() => props.setCurrentPage(pagesCount)} className={styles.lastPage}>{pagesCount}</div>
        </div> : null
      }
    </div>
    <div className={styles.loading}>
      {props.isFetching ? <Loading /> : null}
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
                onClick={() => { el.followed ? props.unfollowThunk(el.id) : props.followThunk(el.id) }
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