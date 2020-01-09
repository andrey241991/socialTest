import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    newPostText: '',
    posts: [
        { message: 'Hi, how are you2', like: '22' },
        { message: 'Hi, how are you', like: '232' },
        { message: 'Hi, how are you', like: '242' }],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { message: state.newPostText, like: '0' };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
            case SET_STATUS:
                return {
                    ...state,
                    status: action.status,
                }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const setStatus = (status) => ({ type: SET_STATUS, status: status })

export const setUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                console.log('response 266', response)
                dispatch(setStatus(response));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status);
            // .then(response => {
            //     dispatch(setStatus(response.data));
            //     console.log('response response', response)
            // });
    }
}


export default profileReducer;
