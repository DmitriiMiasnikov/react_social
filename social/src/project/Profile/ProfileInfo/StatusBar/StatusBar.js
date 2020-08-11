import React from 'react';
import styles from './StatusBar.module.scss';

class StatusBar extends React.Component {
    state = {
        inputIsShown: false,
    }
    showInput = () => {
        this.setState({
            inputIsShown: true
        })
    }
    hideInput = () => {
        this.setState({
            inputIsShown: false
        })
    }
    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.state.inputIsShown ? (
                        <div><input autoFocus={true} value={this.props.status} onBlur={this.hideInput}></input></div>
                    ) : (
                            <div onDoubleClick = {this.showInput}>
                                {this.props.status}
                            </div>
                        )
                }
            </div>
        )
    }
}
export default StatusBar;