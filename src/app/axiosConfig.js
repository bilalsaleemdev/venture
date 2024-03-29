import axios from "axios";
import { notifyError } from "./toaster";


const token = localStorage.getItem('token');
const base_url = 'https://dummyjson.com'
// process.env.REACT_APP_API_URL
const Instance = axios.create({ baseURL: base_url });
// Instance.timeout = 1;
Instance.defaults.headers.common["Content-Type"] = "application/json";
Instance.defaults.headers.common["Accept"] = "application/json";
Instance.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null

export const displayError = (err) => {
    const { status, config } = err.response;
    if (status >= 500) {
        notifyError('Something has gone wrong')
    } else if (status == 400) {
        notifyError('Invalid request')
    } else if (status == 401) {
        if (config.url == "/login" || config.url == '/signup') {
            notifyError('Invalid Credentials')
        } else {
            return
            notifyError('Your token has expired')
            localStorage.clear()
            // navigate("/login")
            window.location.href = '/login'
        }
    } else if (status == 402) {
        notifyError('Payment is required. This error code is not yet operational.')
    } else if (status == 403) {
        notifyError('You don’t have permission to access')
    } else if (status == 404) {
        notifyError('404 Not Found')
    } else if (status == 405) {
        notifyError('Method not Allowed')
    } else if (status == 409) {
        notifyError('The request could not be processed because of conflict in the request')
    } else if (status == 422) {
        Object.entries(err.data.errors).forEach(([key, value]) => {
            notifyError(value[0])
        });
    } else if (status == 429) {
        notifyError('Too Many Requests')
    } else {
        notifyError('Invalid request')
    }
}

Instance.interceptors.request.use(function (config) {
    // UPDATE: Add this code to show global loading indicator
    // document.body.classList.add('loading-indicator');
    return config
}, function (error) {
    return Promise.reject(error);
});

Instance.interceptors.response.use(function (response) {
    // UPDATE: Add this code to hide global loading indicator
    document.body.classList.remove('loading-indicator');
    return response;
}, function (error) {
    try {
        const  message = error?.response?.data;
        // Error through error code
        // displayError(error)

        notifyError(message ?? 'Some thing wrong')
        document.body.classList.remove('loading-indicator');
        return Promise.reject(error);
    } catch (e) {
        console.log('ERROR:::', e)
    }
});

export const getCall = (url, queryParms = {}) => {
    return Instance.get(url, { params: queryParms })
}

export const postCall = (url, body) => {
    return Instance.post(url, body)
}

export const putCall = (url, body) => {
    return Instance.put(url, body)
}

export const delCall = (url) => {
    return Instance.delete(url)
}

export default Instance;