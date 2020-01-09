import React from 'react';
import s from './Profile.module.css';
import { connect } from 'react-redux';
import { setUserProfileThunk, getStatus, updateStatus } from '../../redux/profile-reducer';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log('componentDidMount userId', userId);
    this.props.setUserProfileThunk(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        isAuth={this.props.isAuth}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { setUserProfileThunk })(WithUrlDataContainerComponent);

const WithUrlDataContainerComponent = compose(
  connect(mapStateToProps, { setUserProfileThunk, getStatus, updateStatus }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);


export default WithUrlDataContainerComponent