/**
 * 封装post请求
 * @param url
 * @param params
 * @returns {Promise}
 */
function post(url, params = {}, ext = {}) {
  return new Promise((resolve, reject) => {
    params.ext = ext
    window.axios.post(url, params).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装get请求
 * @param url
 * @param params
 * @returns {Promise}
 */
function get(url, params = {}, ext = {}) {
  return new Promise((resolve, reject) => {
    params.ext = ext
    window.axios
      .get(url, { params })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 *
 * @param method
 * @param url
 * @param params
 * @returns {Promise}
 */
export default function api({ method = 'get', url, params, closeLoading = false, hideErrorMsg = false }) {
  if (method === 'get') {
    return get(url, params, { closeLoading, hideErrorMsg })
  } else if (method === 'post') {
    return post(url, params, { closeLoading, hideErrorMsg })
  }
}
