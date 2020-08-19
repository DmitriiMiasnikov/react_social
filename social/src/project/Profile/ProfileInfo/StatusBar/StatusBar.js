import React from 'react';
import styles from './StatusBar.module.scss';

class StatusBar extends React.Component {
    state = {
        inputIsShown: false,
        status: this.props.status
    }
    showInput = () => {
        this.setState({ inputIsShown: true })
    }
    hideInput = () => {
        this.setState({ inputIsShown: false })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.state.inputIsShown ? (
                        <div><input autoFocus={true} value={this.state.status}
                            onChange={this.onStatusChange} onBlur={this.hideInput}></input></div>
                    ) : (
                            <div onDoubleClick={this.showInput}>
                                {this.state.status ? this.state.status : 'set status'}
                            </div>
                        )
                }
            </div>
        )
    }
}
export default StatusBar;