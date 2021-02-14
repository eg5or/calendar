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
}

export const calendarAPI = {
    getEvents(id, token) {
        return instance.post(`calendar/events`, {id}, {
            headers: {
                'Authorization': token
            }
        })
    },
    changePosition(id, token, eventId, newDate, duration) {
        return instance.post(`calendar/events/changeposition`, {id, eventId, newDate, duration}, {
            headers: {
                'Authorization': token
            }
        })
    },
    addEvent(id, token, event, descr, dateStart, duration, tagName) {
        return instance.post(`calendar/events/add`, {id, event, descr, dateStart, duration, tagName}, {
            headers: {
                'Authorization': token
            }
        })
    },
    editEvent(id, token, eventId, event, descr, dateStart, duration, tagName) {
        return instance.post(`calendar/events/edit`, {id, eventId, event, descr, dateStart, duration, tagName}, {
            headers: {
                'Authorization': token
            }
        })
    },
    deleteEvent(id, token, eventId) {
        return instance.post(`calendar/events/delete`, {id, eventId}, {
            headers: {
                'Authorization': token
            }
        })
    }
}