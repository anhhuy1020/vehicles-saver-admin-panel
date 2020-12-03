export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log("token: ", user.token)
    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}