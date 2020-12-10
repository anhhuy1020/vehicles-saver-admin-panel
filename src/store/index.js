import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './modules/account';
import { alert } from './modules/alert';
import { users } from './modules/users';
import { demands } from './modules/demands';
import { feedbacks } from './modules/feedbacks';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    account,
    alert,
    users,
    demands,
    feedbacks
  }
});