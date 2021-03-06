import { demandService } from '../../services';
import { router } from '../../routes/router';

const state = {demands: [], demandDetail: {}}

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

                commit('SAVE_DEMANDS', demands);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );

    },
    getDemandDetail({ dispatch, commit }, {id}) {
        demandService.getById(id)
        .then(
            demandDetail => {
                demandDetail.demand.demandStatus = demandDetail.demand.status;
                commit('SAVE_DEMAND_DETAIL', demandDetail);
            },
            error => {
                dispatch('alert/error', error, { root: true });
            }
        );
    },
};

const mutations = {
    SAVE_DEMANDS(state, demands) {
        state.demands = demands;
    },
    SAVE_DEMAND_DETAIL(state, demandDetail) {
        state.demandDetail = demandDetail;
    },
};

export const demands = {
    namespaced: true,
    state,
    actions,
    mutations
};