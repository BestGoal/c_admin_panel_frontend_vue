import actions from './actions';
import mutations from './mutations';
import State   from './state';
import getters  from './getters';

export default {
    namespaced: true,
    state : State,
    actions,
    mutations,
    getters,
}
