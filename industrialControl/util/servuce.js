import axios from 'axios' //加载数据请求
import route from '../../router'
import {
  Loading,
  Message
} from 'element-ui';
axios.defaults.headers.post['Accept'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let loadinginstace;
// 拦截器

axios.interceptors.request.use(function (config) {
  loadinginstace = Loading.service({
    fullscreen: true
  });
  return config;
});
axios.interceptors.response.use(function (response) {
  // 响应成功关闭loading
  loadinginstace.close();
  return response;
});

export default {
  axios,
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
          // 'Content-Type': 'application/json',
          'TOKEN': sessionStorage.getItem('TOKEN')
        }
      }).then(res => {
        if(res.data.code=='1001'){
          Message.warning({
            message: '你还未登录或登录过期，请重新登录后再访问！',
            type: 'warning'
          });
          sessionStorage.removeItem('TOKEN')
          setTimeout(() => {
            route.push('/');
            location.reload();
          }, 1000)
        }else{
          return resolve(res)
        }
      }).catch(error => {
        // reject(err)
        loadinginstace.close();
        if (error.response.status == 450) {
          Message.warning({
            message: '你还未登录或登录过期，请重新登录后再访问！',
            type: 'warning'
          });
          sessionStorage.removeItem('TOKEN')
          setTimeout(() => {
            route.push('/');
            location.reload();
          }, 1000)
        }
      })
    })
  },
  exportPost(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: data,
        responseType: 'blob',
        headers: {
          // 'Content-Type': 'application/json',
          'TOKEN': sessionStorage.getItem('TOKEN')
        }
      }).then(res => {
        if(res.data.code=='1001'){
          Message.warning({
            message: '你还未登录或登录过期，请重新登录后再访问！',
            type: 'warning'
          });
          sessionStorage.removeItem('TOKEN')
          setTimeout(() => {
            route.push('/');
            location.reload();
          }, 1000)
        }else{
          return resolve(res)
        }
      }).catch(error => {
        // reject(err)
        loadinginstace.close();
        if (error.response.status == 450) {
          Message.warning({
            message: '你还未登录或登录过期，请重新登录后再访问！',
            type: 'warning'
          });
          sessionStorage.removeItem('TOKEN')
          setTimeout(() => {
            route.push('/');
            location.reload();
          }, 1000)
        }
      })
    })
  },
  importPost(url, data){
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data',
          'TOKEN': sessionStorage.getItem('TOKEN')
        },
      }).then(res => {
        return resolve(res)
      }).catch(error => {
        // reject(err)
        loadinginstace.close();
        if (error.response.status == 450) {
          Message.warning({
            message: '你还未登录或登录过期，请重新登录后再访问！',
            type: 'warning'
          });
          sessionStorage.removeItem('TOKEN')
          setTimeout(() => {
            route.push('/');
            location.reload();
          }, 500)
        }
      })
    })
  },
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        params:params,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'TOKEN': sessionStorage.getItem('TOKEN')
        }
      }).then(res => {
        if(res.data.code=='1001'){
          Message.warning({
            message: '你还未登录或登录过期，请重新登录后再访问！',
            type: 'warning'
          });
          sessionStorage.removeItem('TOKEN')
          setTimeout(() => {
            route.push('/');
            location.reload();
          }, 1000)
        }else{
          return resolve(res)
        }
      }).catch(error => {
        loadinginstace.close();
        if (error.response.status == 450) {
          Message.warning({
            message: '你还未登录或登录过期，请重新登录后再访问！',
            type: 'warning'
          });
          sessionStorage.removeItem('TOKEN')
          setTimeout(() => {
            route.push('/');
            location.reload();
          }, 1000)
        }
      })
    })
  }
}


