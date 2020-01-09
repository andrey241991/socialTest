import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{status}</span>
        </div>
      }
      {editMode &&
        <div>
          <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={status}></input>
        </div>
      }

      {/* <div>
          <span>{this.props.status}</span>
        </div>
        <div>
          <input value={this.props.status}></input>
        </div> */}
    </>

  );
}

export default ProfileStatusWithHooks;
