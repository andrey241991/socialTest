import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                { message: 'Hi, how are you2', like: '22' },
                { message: 'Hi, how are you', like: '232' },
                { message: 'Hi, how are you', like: '242' }]
        },
        messagesPage: {
            dialogs: [
                { name: 'Dimich', id: '1' },
                { name: 'Dimich2', id: '2' }],
            messages: [
                { message: 'hi22' },
                { message: 'hi33' }],
            newMessageBody: '',
        },
        siteBarPage: {
            friends: [
                {
                    img: 'https://cdn.iconscout.com/icon/premium/png-48-thumb/line-ava-avatar-man-40210.png',
                    name: 'Andey'
                },
                {
                    img: 'https://cdn.iconscout.com/icon/premium/png-48-thumb/line-ava-avatar-man-40210.png',
                    name: 'Ivan'
                },
                {
                    img: 'https://cdn.iconscout.com/icon/premium/png-48-thumb/line-ava-avatar-man-40210.png',
                    name: 'Pavel'
                }
            ]
        }
    },
    getState() {
        console.log('this', this);
        return this._state;
    },
    _callSubscriber() {

    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = profileReducer(this._state.messagesPage, action);
        this._state.siteBarPage = profileReducer(this._state.siteBarPage, action);
        this._callSubscriber(this._state);

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;