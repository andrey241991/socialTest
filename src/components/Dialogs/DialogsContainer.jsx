import React from 'react'
import { updateNewMessageBodyActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

import { connect } from 'react-redux'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

// const AuthRedirectComponent = WithAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;




//import StoreContext from '../../StoreContext';
//
// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().dialogsPage;

//                 const onSendMessageClick = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }

//                 const onNewMessageChange = (text) => {
//                     store.dispatch(updateNewMessageBodyActionCreator(text));
//                 }

//                 return <Dialogs
//                     sendMessage={onSendMessageClick}
//                     updateNewMessageBody={onNewMessageChange}
//                     newMessageBody={state.newMessageBody}
//                     dialogs={state.dialogs}
//                     messages={state.messages}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }

// export default DialogsContainer;