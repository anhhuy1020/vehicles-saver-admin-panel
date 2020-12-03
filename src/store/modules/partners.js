import { partnerService } from '../../services';
import { router } from '../../routes/router';

const state = {partners: []}

const actions = {
    getAll({ dispatch, commit }) {
        partnerService.getAll()
        .then(
            res => {
                commit('SAVE_PARTNERS', res.partners);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );

    }
};

const mutations = {
    SAVE_PARTNERS(state, partners) {
        state.partners = partners;
      }
};

export const partners = {
    namespaced: true,
    state,
    actions,
    mutations
};