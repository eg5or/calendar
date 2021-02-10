import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const authAPI = {
    loginToSite(email, password) {
        return instance.post('auth/login', {email, password})
    },

    registerNewUser(name, email, password) {
        return instance.post('auth/register', {name, email, password})
    },

    checkAuth(id, token) {
        return instance.post(`auth/me`, {id}, {
            headers: {
                'Authorization': token
            }
        })
    },

    changePassword(id, newPassword) {
        return instance.post(`auth/changepwd`, {id, newPassword})
    },

    authorized(id) {
        return instance.get(`auth/authorized/${id}`).then(response => response.data)
    }
}