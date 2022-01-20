'use strict'
import axios from 'axios'
import { Toast } from 'vant'

const config = {
  baseURL: '',
  timeout: 30 * 1000 // Timeout
  // withCredentials: true, // 是否携带cookie信息
}
const _axios = axios.create(config)

_axios.interceptors.request.use(
  function(config) {
    console.log('request')
    const oldConfig = JSON.parse(JSON.stringify(config))
    console.log(oldConfig)
    let showLoading = true
    if (config.data && config.data.ext) {
      showLoading = !config.data.ext.closeLoading
      config.ext = config.data.ext
      delete config.data.ext
    }
    if (config.params && config.params.ext) {
      showLoading = !config.params.ext.closeLoading
      config.ext = config.params.ext
      delete config.params.ext
    }
    if (showLoading) {
      Toast.loading({
        message: 'Loading',
        forbidClick: true,
        duration: 0
      })
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    Toast.clear()
    console.log('response:')
    console.log(response)
    let showErrMsg = true
    if (response && response.config && response.config.ext) {
      showErrMsg = !response.config.ext.hideErrorMsg
    }
    if (response.data.code !== '00000' && response.data.message && showErrMsg) {
      Toast({
        message: response.data.message,
        duration: 3000
      })
      return Promise.reject()
    }
    // Do something with response data
    return response
  },
  function(error) {
    Toast(error.message)
    return Promise.reject(error)
  }
)

export default {
  install: (app, option)=>{
    app.$axios = _axios
    app.$axiosOrigin = axios
    window.axios = _axios
  }
}
