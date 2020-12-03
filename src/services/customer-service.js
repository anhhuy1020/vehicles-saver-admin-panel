import config from '../config/config.json';
import { authHeader } from '../helpers/auth-header';

const mode = config.mode;
const BASE_URL = config[mode].SERVER_URL;

export const customerService = {
    getAll,
    getById,
    update,
    delete: _delete
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    console.log("requestOptions", requestOptions);

    return fetch(`${BASE_URL}/customers`, requestOptions).then(handleResponse);
}


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/customers/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${BASE_URL}/customers/${user.id}`, requestOptions).then(handleResponse);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/customers/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log("handleResponse customers = ", text);
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