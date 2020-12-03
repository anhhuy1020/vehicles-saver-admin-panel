import { customerService } from '../../services';
import { router } from '../../routes/router';

const state = {customers: []}

const actions = {
    getAll({ dispatch, commit }) {
        customerService.getAll()
        .then(
            res => {
                commit('SAVE_CUSTOMERS', res.customers);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );

    }
};

const mutations = {
    SAVE_CUSTOMERS(state, customers) {
        state.customers = customers;
      }
};

export const customers = {
    namespaced: true,
    state,
    actions,
    mutations
};