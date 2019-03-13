import {
  fetchAllActivities,
  fetchActivitiesByCriteria,
  fetchMyCraticActivities
} from '@/api/activity'
const activity = {
  state: {
    activities: [],
    queryParam: ''
  },

  mutations: {
    SET_ACTIVITIES: (state, activities) => {
      state.activities = activities
    },
    SET_QUERY_PARAM: (state, queryParam) => {
      state.queryParam = queryParam
    }
  },

  actions: {
    fetchAllActivities({ commit }) {
      return new Promise(async(resolve, reject) => {
        const res = await fetchAllActivities()
        commit('SET_ACTIVITIES', res.data.data)
        resolve()
      })
    },
    fetchMyCraticActivities({ commit }) {
      return new Promise(async(resolve, reject) => {
        const res = await fetchMyCraticActivities('admin')
        commit('SET_ACTIVITIES', res.data.data)
        resolve()
      })
    },
    fetchActivitiesByCriteria({ commit, state }, queryParam) {
      if (queryParam !== undefined) {
        commit('SET_QUERY_PARAM', queryParam)
      }
      return new Promise(async(resolve, reject) => {
        const res = await fetchActivitiesByCriteria(state.queryParam)
        commit('SET_ACTIVITIES', res.data.data)
        resolve()
      })
    }
  }
}
export default activity
