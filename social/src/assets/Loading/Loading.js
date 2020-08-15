import React from 'react';
import styles from './Loading.module.scss'
import loading from './../img/loading.svg';

const Loading = (props) => {
    return (
        <div className={styles.loading}>
            {props.isFetching ? <img src={loading}></img> : null}
        </div>
    )
}

export default Loading