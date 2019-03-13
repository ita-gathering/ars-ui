import request from '@/utils/request'

const activityAPI = '/activity'

export function fetchAllActivities() {
  return request({
    url: activityAPI,
    method: 'get'
  })
}

export function fetchActivitiesByTitle(title) {
  console.log('api')
  return request({
    url: activityAPI + '?title=' + title,
    method: 'get'
  })
}

export function fetchActivityRegisters(activityId) {
  return request({
    url: activityAPI + '/register',
    method: 'get'
  })
}

// export function createActivity(activity) {
//   return request({
//     url: activityAPI,
//     method: 'post'
//   })
// }

export function updateActivity(activity) {
  return request({
    url: activityAPI,
    method: 'put'
  })
}

export function deleteActivityById(id) {
  return request({
    url: activityAPI + '/' + id,
    method: 'delete'
  })
}

export function createActivity(data) {
  return request({
    url: 'http://liangoc-w10:8080/activity',
    method: 'post',
    data
  })
}
