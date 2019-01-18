// 封装axios
import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.baseURL = ''

/**
 * 封装get请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch (url, param = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      param: param
    }).then((res) => {
      resolve(res.data)
    }, error => {
      reject(error)
    })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then((res) => {
      resolve(res.data)
    }, error => {
      reject(error)
    })
  })
}
