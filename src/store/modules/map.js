import { mapService } from '../../services';
import { router } from '../../routes/router';

const state = {markers: []}

const actions = {
    getAll({ dispatch, commit }) {
        mapService.getMarkers()
        .then(
            res => {
                commit('SAVE_USERS', markers);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );

    }
};

const mutations = {
    SAVE_USERS(state, markers) {
        state.markers = markers;
      }
};

export const markers = {
    namespaced: true,
    state,
    actions,
    mutations
};