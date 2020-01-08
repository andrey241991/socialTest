import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;













// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>{
//       function (store) {
//         let state = store.getState().profilePage;

//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         }

//         const onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         }

//         return <MyPosts posts={state.posts} newPostText={state.newPostText} addPost={addPost} updateNewPostText={onPostChange} />
//       }
//     }
//     </StoreContext.Consumer>
//   );
// }

// export default MyPostsContainer;