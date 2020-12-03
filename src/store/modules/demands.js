import { demandService } from '../../services';
import { router } from '../../routes/router';

const state = {demands: []}

const actions = {
    getAll({ dispatch, commit }) {
        demandService.getAll()
        .then(
            res => {
                let demands = res.demands;
                for (let key in demands){
                    let demand = demands[key];
                    let status = demand.status;
                    demand.demandStatus = status;
                    delete demand.status;
                }
                console.log("demands 2 === ", demands)

                commit('SAVE_DEMANDS', demands);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );

    }
};

const mutations = {
    SAVE_DEMANDS(state, demands) {
        state.demands = demands;
      }
};

export const demands = {
    namespaced: true,
    state,
    actions,
    mutations
};