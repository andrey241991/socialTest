import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

  const postsElements = props.posts.map((post, index) =>
      <Post key={index} message={post.message} like={post.like} />
 );


const addPost = () => {
   props.dispatch(addPostActionCreator());
 }

const updateNewPostText = () => {
  let newPostText = newPostElement.current.value;
  props.dispatch(updateNewPostTextActionCreator(newPostText));
}

const newPostElement = React.createRef();

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
  <textarea ref={newPostElement} onChange={updateNewPostText} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div>
        New post
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>);
}

export default MyPosts;
