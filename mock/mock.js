export default [
  {
    url: '/api/mock', // 请求地址
    method: 'post', // 请求方法
    response: ({ query }) => {
      // 响应内容
      return {
        code: 0,
        data: {
          name: 'hello world post',
        },
      }
    },
  },
  {
    url: '/api/mock', // 请求地址
    method: 'get', // 请求方法
    response: ({ query }) => {
      // 响应内容
      return {
        code: 0,
        data: {
          name: 'hello world get',
        },
      }
    },
  }
]
