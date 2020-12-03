import { userService } from '../../services';
import { router } from '../../routes/router';

const state = {users: []}

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

    }
};

const mutations = {
    SAVE_USERS(state, users) {
        state.users = users;
      }
};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};