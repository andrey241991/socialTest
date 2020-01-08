import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
// import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {


    const dialogElements =
        props.dialogsPage.dialogs.map(dialog =>
            <DialogItem name={dialog.name} id={dialog.id} />
        );

    const messagesElements =
        props.dialogsPage.messages.map(message =>
            <Message message={message.message} />
        );

    const addMessage = () => {
        props.sendMessage();
    }

    const updateNewMessageBody = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    }

    // if (!props.isAuth) {
    //     return <Redirect to='/login' />
    // }

    return (
        <div className={s.dialogs}>
            {alert(props.isAuth)}
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea
                className={s.messageTextArea}
                onChange={updateNewMessageBody}
                value={props.dialogsPage.newMessageBody}></textarea>
            <div>
                <button onClick={addMessage}>Add New Message</button>
            </div>
        </div>
    );
}

export default Dialogs;