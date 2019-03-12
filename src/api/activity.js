import request from '@/utils/request'

const activityAPI = '/activity'

export function fetchAllActivities() {
  return request({
    url: activityAPI,
    method: 'get'
  })
}

export function fetchActivityMembers() {
  return request({
    url: '/member-data',
    method: 'get'
  })
}

export function createActivity(activity) {
  return request({
    url: activityAPI,
    method: 'post'
  })
}

export function deleteActivityById(id) {
  return request({
    url: activityAPI + '/' + id,
    method: 'delete'
  })
}
