export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'

export function recieveBlogs (blogs) {
    return {
        type: RECEIVE_BLOGS,
        blogs
    }
}