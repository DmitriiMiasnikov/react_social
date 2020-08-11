import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true ,
    headers: {
      'API-KEY': 'cce9d67d-06d9-4ea4-917a-b67979dc3cd1'
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    authUser () {
        return instance.get(`auth/me`).then(response => response.data)
    },
    openProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    followUser (id) {
        return instance.post(`follow/${id}`)
    }
}
