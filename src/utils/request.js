import axios from 'axios'
import store from '../store'
import { Message, MessageBox } from 'element-ui'

axios.defaults.withCredentials = true
axios.defaults.baseURL='/api'
const service = axios.create({
  timeout: 180000,
  async:true,
  crossDomain:true,
  withCredentials: true
});


// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
      const res = response.data
      console.log('真实的回复为：',response)
      // if the custom code is not 200, it is judged as an error.
      if (response.status != 200) {
          //判断token是否失效
          if(response.status==400){
              Message({
                  message: '您尚未登录，请先登录',
                  type: 'error',
                  duration: 5 * 1000
              })
              return Promise.reject(new Error('您尚未登录'||'Error'))
          }
          console.log(response.status)
          return Promise.reject(new Error(res.msg || 'Error'))
      }
      else {
          return res
      }
  },
  error => {
      console.log('Request Error!') // for debug
      return Promise.reject(error)
  }

)
// request interceptor
service.interceptors.request.use(
  config=>{
      return config;
  },
  error =>{
      console.log(error);
      return Promise.reject(error);
  }

)
export default service
