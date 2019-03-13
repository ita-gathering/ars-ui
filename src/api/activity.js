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

export function createActivity(data) {
  return request({
    url: 'http://liangoc-w10:8080/activity',
    method: 'post',
    data
  })
}
