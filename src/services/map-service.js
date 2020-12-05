import config from '../config/config.json';
import { authHeader } from '../helpers/auth-header';

const mode = config.mode;
const BASE_URL = config[mode].SERVER_URL;

export const userService = {
    getMarkers
};

function getMarkers() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/markers`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log("handleResponse = ", text);
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // tự động logout nếu response 401 được trả về từ api
                logout();
                location.reload(true);
            }

            const error = (data && data.errors) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}