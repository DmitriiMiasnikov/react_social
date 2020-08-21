import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cce9d67d-06d9-4ea4-917a-b67979dc3cd1'
    }
});

export const usersAPI = {
    async getUsers(currentPage, pageSize) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data;
    },
    async authUser() {
        const response = await instance.get(`auth/me`)
        return response.data;
    },
    openProfile(userId) {
        console.warn('warning! please use profileAPI.openProfile() method')
        return profileAPI.openProfile(userId)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
    }
}

export const profileAPI = {
    async openProfile(userId) {
        const response = await instance.get(`profile/${userId}`)
        return response.data;

    },
    async getStatus(userId) {
        const response = await instance.get(`profile/status/${userId}`)
        return response.data;
    },
    async updateStatus(status) {
        const response = await instance.put(`profile/status`, { status: status })
        return response.data;
    }
}
export const authAPI = {
    async me(email, password, rememberme) {
        const response = await instance.get(`auth/me`, { email, password, rememberme })
        return response.data;
    },
    async login(email, password, rememberme) {
        const response = await instance.post(`auth/login`, { email, password, rememberme })
        return response.data;
    },
    async logout() {
        const response = await instance.delete(`auth/login`)
        return response.data;
    },
}

export const friendsAPI = {
    async getFriendsList() {
        const response = await instance.get(`users?friend=${true}`)
        return response.data;
    },
}