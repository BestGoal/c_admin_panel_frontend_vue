import Vuex from 'vuex';
import Vue from 'vue';
import tasks from './modules/tasks';
import employees from './modules/employees';
import incidents from './modules/Incidents';
import settings from './modules/settings'
import apt from './modules/apt'
import organization from './modules/organization'
import country from './modules/country'
import StatusStore from './modules/StatusStore'
import departments from './modules/departments'
import requsetIds from './modules/requsetIds'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tasks,
        apt,
        settings,
      country,
        employees,
        incidents,
        StatusStore,
        departments,
         organization,
         requsetIds

    }
});




