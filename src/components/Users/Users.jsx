import React from 'react';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom'

const Users = ({ state, onPageChanged, followUser, unFollowUser }) => {

    let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span onClick={() => { onPageChanged(p) }} className={state.currentPage === p && styles.selectedPage}>{p}</span>
                    })
                }
            </div>

            {/* <button onClick={getUsers}>Get Users</button> */}
            {
                state.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    alt='img'
                                    src={u.photos.small !== null
                                        ? u.photos.small
                                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-lPTd4RPk16Xnk83yUAc2DZ1YzUk4kuVHIHTNuDCUXHiVooX&s'}
                                    className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={state.followingInProgress.some((id) => id === u.id)} onClick={() => unFollowUser(u.id)}>Unfollow</button>
                                : <button disabled={state.followingInProgress.some((id) => id === u.id)} onClick={() => followUser(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/* <div>{u.location.country}</div>
                            <div>{u.location.city}</div> */}
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;
