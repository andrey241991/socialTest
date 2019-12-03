import React from 'react';

const SiteBarItem = (props) => {
  return (
    <div>
      <img src={props.img} alt='ava' />
      <h3>{props.name}</h3>
    </div>
  );
}

export default SiteBarItem;