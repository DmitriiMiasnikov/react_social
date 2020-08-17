import React from 'react';
import styles from './Loading.module.scss'
import loading from './../img/loading.svg';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loading}></img>
        </div>
    )
}

export default Loading