const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = { message: state.newPostText, like: '0' };
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newPostText;
    }
    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })

export default profileReducer;
