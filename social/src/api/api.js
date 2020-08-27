import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f0d84cf3-ab13-4b84-b572-10fee709500e'
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
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
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
        await instance.put(`profile/status`, { status: status })
        return status;
    },
    async updateLookingJob(profile) {
        const response = await instance.put(`profile`, profile)
        return response;
    },
    async updatePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        const response = await instance.put(`profile/photo`, formData)
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
    async getFriendsMenu() {
        const response = await instance.get(`users?friend=${true}&count=6`)
        return response.data;
    },
    async getFriendsAll() {
        const response = await instance.get(`users?friend=${true}&count=100`)
        return response.data;
    },
}