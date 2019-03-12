import { fetchAllActivities } from '@/api/activity'
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
        commit('SET_ACTIVITIES', res.data)
        resolve()
      })
    }
  }
}
export default activity
