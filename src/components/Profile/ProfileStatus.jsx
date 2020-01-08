import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status}></input>
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
}

export default ProfileStatus;
