import React, { useState, useEffect } from 'react';
import styles from './StatusBar.module.scss';

const StatusBarHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateInput = () => {
        setEditMode(true);
    }
    const deactivateInput = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={styles.wrapper}>
            {
                editMode ?
                    <div>
                        <input onBlur={deactivateInput} autoFocus={true} onChange={onStatusChange} value={status}>
                        </input>
                    </div>
                    :
                    <div onClick={activateInput}>
                        { status ? status : 'click to set status'}
                    </div>
            }

        </div>
    )
}
export default StatusBarHooks;