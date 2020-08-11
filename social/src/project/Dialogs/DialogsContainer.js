import { connect } from 'react-redux';
import { addMessage, updateNewMessage } from '../../state/dialogsReducer';
import Dialogs from './Dialogs';
import { AuthRedirect } from './../../hoc/AuthRedirect'
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    newDialogMessage: state.dialogs.newDialogMessage,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {
    updateNewMessage,
    addMessage
  }),
  AuthRedirect
)(Dialogs);