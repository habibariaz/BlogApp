import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URL } from '../Constants/Config'
import { getAccessToken, getType } from '../Utils/Common_utils';

const API_URL = 'https://blog-app-backend-updated.vercel.app';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
     headers: {
//      "Accept": "application/json, multipart/form-data",
        "Accept": "application/json", // Default to JSON responses
        "Content-Type": "application/json", // JSON payloads by default
        'Authorization': `Bearer ${getAccessToken()}`
    },
    withCredentials: true  // Required for cross-origin cookies
});

// Request interceptor
axiosInstance.interceptors.request.use(
    //passing params (body,query) from Config.js file
    function (config) {
        if (config.TYPE.params) {
            config.params = config.TYPE.params //it is query
        } else if (config.TYPE.query) {
              // config.url = `${config.url}/${config.TYPE.query}`; // path params
            config.url = config.url + '/' + config.TYPE.query; //it is params

        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response);
    },
    function (error) {
        return Promise.reject(processError(error));
    }
);

const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data };
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.statusText || "Unknown error occurred",
            code: response?.status
        };
    }
};

const processError = (error) => {
    if (error.response) {
        console.error("Server Error Response:", error.response);
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure.message,
            title: API_NOTIFICATION_MESSAGES.responseFailure.title,
            code: error.response.status
        };
    } else if (error.request) {
        console.error("No Response Received:", error.request);
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure.message,
            title: API_NOTIFICATION_MESSAGES.requestFailure.title,
            code: ""
        };
    } else {
        console.error("Request Setup Error:", error.message);
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError.message,
            title: API_NOTIFICATION_MESSAGES.networkError.title,
            code: ""
        };
    }
};

const API = {};
for (const [key, value] of Object.entries(SERVICE_URL)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === "DELETE" ? {} : body,
            responseType: value.responseType || 'json', // Default responseType
            //authenticate access token
            // headers: {
            //     Authorization: getAccessToken()
                
            // },
            //  headers: {
            //     "Authorization": accessToken ? `Bearer ${accessToken}` : '', // Only set Authorization header if token exists
            // },
            headers: {
                // Check if a valid access token is available before including it in the header
                Authorization: getAccessToken() ? `Bearer ${getAccessToken()}` : '',  // Add token if available
            },
            
            TYPE: getType(value, body),

            onUploadProgress: function (progressEvent) {
                if (showUploadProgress) {
                    let percentageCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function (progressEvent) {
                if (showDownloadProgress) {
                    let percentageCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    showDownloadProgress(percentageCompleted);
                }
            }
        });
}

export { API };
