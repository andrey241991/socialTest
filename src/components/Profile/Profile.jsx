import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SiteBar from '../SiteBar/SiteBar';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
      {/* //
      // postTextArea={props.postTextArea}  */}
      <SiteBar friends={props.friends}/>
    </div>
  );
}

export default Profile;
