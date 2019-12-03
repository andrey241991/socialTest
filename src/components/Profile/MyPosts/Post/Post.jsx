import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='http://img.greatlove.ru/article/7/9/8/16798.jpeg' />
      {props.message}
      <div>
        <span>like</span>{props.like}
      </div>
    </div>
  );
}

export default Post;