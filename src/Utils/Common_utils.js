
// export const getAccessToken = () => {
//     return sessionStorage.getItem('accessToken')
// }
export const getAccessToken = () => {
    return sessionStorage.getItem('accessToken') || null;
}; 
export const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
}

//passing params to Api.js file for blog posts category
export const getType = (value, body) => {
    if (value.params) {
        return { params: body }
    } else if (value.query) {
        //it returns data type of any element
        if (typeof body === 'object') {
            return { query: body._id }
        } else {
            return { query: body }
        }
    } return []
}
