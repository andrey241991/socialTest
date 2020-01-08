import React from 'react'
import { connect } from 'react-redux';
import { toggleFollowingProgress, getUsers, setCurrentPage, followUser, unfollowUser } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.getUsers();
    }

    getUsers = (currentPage = this.props.currentPage) => {
        this.props.getUsers(currentPage);
    }

    onPageChanged = (currentPage) => {
        this.getUsers(currentPage);
        this.props.setCurrentPage(currentPage)
    }

    followUser = (userId) => {
        console.log('followUser userId', userId);
        this.props.followUser(userId);
    }

    unFollowUser = (userId) => {
        console.log('unFollowUser userId', userId);
        this.props.unfollowUser(userId);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    state={this.props}
                    followUser={this.followUser}
                    unFollowUser={this.unFollowUser}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow,
//         unfollow,
//         setUsers,
//         setCurrentPage,
//         setTotalUsersCount,
//         toggleIsFetching,
//     }
// }

// export default connect(mapStateToProps, {
//     toggleFollowingProgress,
//     setCurrentPage,
//     getUsers,
//     followUser,
//     unfollowUser
// })(UsersContainer);


export default compose(
    connect(mapStateToProps, { toggleFollowingProgress, setCurrentPage, getUsers, followUser, unfollowUser })
)(UsersContainer)


