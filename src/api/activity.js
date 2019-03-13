import request from '@/utils/request'

const activityAPI = '/activity'

export function fetchAllActivities() {
  return request({
    url: activityAPI,
    method: 'get'
  })
}
export function fetchMyCraticActivities(username) {
  return request({
    url: 'user/' + username + '/activity',
    method: 'get'
  })
}

export function fetchActivitiesByCriteria(queryParam) {
  return request({
    url: activityAPI + queryParam,
    method: 'get'
  })
}

export function fetchActivityById(activityId) {
  return request({
    url: activityAPI + '/' + activityId,
    method: 'get'
  })
}

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
    url: activityAPI,
    method: 'post',
    data
  })
}
