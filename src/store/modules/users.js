import { userService } from '../../services';
import { router } from '../../routes/router';

const state = {users: [], userDetail: {}}

const actions = {
    getAll({ dispatch, commit }) {
        userService.getAll()
        .then(
            users => {
                commit('SAVE_USERS', users);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );

    },
    getUserDetail({ dispatch, commit }, {id}) {
        userService.getById(id)
        .then(
            userDetail => {
                let demands = userDetail.history;
                for (let key in demands){
                    let demand = demands[key];
                    let status = demand.status;
                    demand.demandStatus = status;
                    delete demand.status;
                }
                commit('SAVE_USER_DETAIL', userDetail);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );
    },
    create({ dispatch, commit }, user) {
        console.log("users create", user);
        userService.create(user)
        .then(
            () => {
                router.push({path: 'user-manage'});
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );
    }
};

const mutations = {
    SAVE_USERS(state, users) {
        state.users = users;
      },
    SAVE_USER_DETAIL(state, userDetail) {
        state.userDetail = userDetail;
    }
};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};