import { RECEIVE_BLOGS } from '../actions/blogs'

export default function blogs (state = {}, action) {
    switch(action.type) {
        case RECEIVE_BLOGS:
            return {
                ...state,
                ...action.blogs
            }
        default:
            return state
    }
}