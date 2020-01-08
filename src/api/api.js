import axios from 'axios';


const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // headers: {
    //     'API_KEY': 'a3833ea3-3a1a-4760-bf25-207382873b23'
    // }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 30) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response =>
                console.log('response', response))
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`).then(respone => respone.data)
    },
    authMe() {
        return instance.get('/auth/me').then(response => response)
    }
}