//API_notification_msgs

// export const API_NOTIFCATION_MESSAGES = {
//     loading: {
//         title: "Loading....",
//         message: "Data is being loaded, Please wait"
//     },
//     success: {
//         title: "Success",
//         message: "Data Successfully Loaded"
//     },
//     resposeFailure: {
//         title: "Error",
//         message: "An error occured while fetching response from the server. Please try again"
//     },
//     requestFailure: {
//         title: "Error",
//         message: "An error occured while parsing request data"
//     },
//     networkError: {
//         title: "Error",
//         message: "Unable to connect with server. Please check internet connectivity and try again later."
//     }
// }


export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded, Please wait"
    },
    success: {
        title: "Success",
        message: "Data Successfully Loaded"
    },
    responseFailure: {
        title: "Error",
        message: "An error occurred while fetching response from the server. Please try again"
    },
    requestFailure: {
        title: "Error",
        message: "An error occurred while parsing request data"
    },
    networkError: {
        title: "Error",
        message: "Unable to connect with server. Please check internet connectivity and try again later."
    },
    validationError: {
        title: "Validation Error",
        message: "Please ensure all required fields are correctly filled."
    },
    unauthorizedAccess: {
        title: "Unauthorized",
        message: "You are not authorized to access this resource."
    }
};

// API service call
export const SERVICE_URL = {
    //Methods =>  POST,GET,PUT,DELETE
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: { url: '/login', method: "POST" },
    uploadFile: { url: '/file/upload', method: "POST" },
    createPost: { url: 'create', method: "POST" },
    getAllPosts: { url: '/posts', method: "GET", params: true },
    getPostById: { url: 'post', method: "GET", query: true },
    updatePost: { url: 'update', method: "PUT", query: true },
    deletePost: { url: 'delete', method: "DELETE", query: true },
    newComment: { url: '/comment/new', method: "POST" },
    getAllComments: { url: 'comments', method: "GET", query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true }
} 