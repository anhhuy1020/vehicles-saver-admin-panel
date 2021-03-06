import config from '../config/config.json';
import { authHeader } from '../helpers/auth-header';

const mode = config.mode;
const BASE_URL = config[mode].SERVER_URL;

export const userService = {
    login,
    logout,
    getAll,
    create,
    getById,
    update,
    delete: _delete
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${BASE_URL}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login thành công nếu có một token jwt trong response
            if (user.token) {
                // lưu dữ liệu user và token jwt vào local storage để giữ user được log in trong page
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // xoá user từ local storage để log out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    console.log("requestOptions", requestOptions);

    return fetch(`${BASE_URL}/users`, requestOptions).then(handleResponse);
}


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/user-detail/:id?id=${id}`, requestOptions).then(handleResponse);
}

function create(user) {
    console.log("createUser: ", user)
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${BASE_URL}/users/create`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${BASE_URL}/users/id?=${user.id}`, requestOptions).then(handleResponse);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
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