import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import {Redirect} from 'react-router-dom'
import ProfileStatus from '../ProfileStatus';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  // if (!props.isAuth) {
  //   return <Redirect to='/login' />
  // }

  return (
    <div>
      <div>
        <img
          alt='img'
          src={props.profile.photos.large !== null
            ? props.profile.photos.large
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-lPTd4RPk16Xnk83yUAc2DZ1YzUk4kuVHIHTNuDCUXHiVooX&s'}
        />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
        </div>
        <ProfileStatus status='Hello'/>
    </div>
  );
}

export default ProfileInfo;
