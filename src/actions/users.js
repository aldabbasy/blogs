export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REGISTER_USER = 'REGISTER_USERS'

export function recieveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function registerUser (user) {
    return {
        type: REGISTER_USER,
        user
    }
}