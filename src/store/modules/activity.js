import {
  fetchAllActivities,
  fetchActivitiesByTitle
} from '@/api/activity'
const activity = {
  state: {
    activities: []
  },

  mutations: {
    SET_ACTIVITIES: (state, activities) => {
      state.activities = activities
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
    fetchActivitiesByTitle({ commit }, title) {
      return new Promise(async(resolve, reject) => {
        const res = await fetchActivitiesByTitle(title)
        commit('SET_ACTIVITIES', res.data.data)
        resolve()
      })
    }
  }
}
export default activity
