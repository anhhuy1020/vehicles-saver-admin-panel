import { feedbackService } from '../../services';
import { router } from '../../routes/router';

const state = {feedbacks: []}

const actions = {
    getAll({ dispatch, commit }) {
        feedbackService.getAll()
        .then(
            res => {
                commit('SAVE_FEEDBACKS', res.feedbacks);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );

    }
};

const mutations = {
    SAVE_FEEDBACKS(state, feedbacks) {
        state.feedbacks = feedbacks;
      }
};

export const feedbacks = {
    namespaced: true,
    state,
    actions,
    mutations
};