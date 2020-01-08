import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SiteBar from '../SiteBar/SiteBar';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileInfo profile={props.profile} isAuth={props.isAuth} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
