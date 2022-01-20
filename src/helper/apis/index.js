import api from '@/helper'

export function testMock(params) {
  return api({
    method: 'post',
    url: `/api/mock`,
    params
  })
}

export function testMockGet(params) {
  return api({
    method: 'get',
    url: `/api/mock`,
    params
  })
}
