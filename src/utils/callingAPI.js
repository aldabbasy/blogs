import axios from 'axios'

const BASE_URL = 'http://localhost:61130/api'
const REGISTER_USER_URL = 'Users/Register'
const AUTHENTICATE_USER_URL = 'Users/Login'
const GET_INITIAL_DATA = 'Users/InitialData'
const CREATE_BLOG_URL = 'blogs/CreateBlog'

const api = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        headers: {"Access-Control-Allow-Origin": "*"}
    }
})

export async function registerUser(user){
    try{
        let data = ''
        await api.post(`${REGISTER_USER_URL}`, user).then(res => {
            data = res.data
        })
        return data
    }
    catch(ex){
        throw ex
    }
}

export async function authenticateUser(user){
    try{
        let data = ''
        await api.post(`${AUTHENTICATE_USER_URL}`, user).then(res => {
            data = res.data
        })
        return data
    }
    catch(ex){
        throw ex
    }
}

export async function getInitialData(){
    try{
        let data = ''
        await api.post(`${GET_INITIAL_DATA}`).then(res => {
            data = res.data
        })
        return data
    }
    catch(ex){
        throw ex
    }
}

export async function createBlog(blog){
    try{
        let data = ''
        await api.post(`${CREATE_BLOG_URL}`).then(res => {
            data = res.data
        })
        return data
    }
    catch(ex){
        throw ex
    }
}
