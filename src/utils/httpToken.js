/**
 * 此文件为axios ajax的统一设置,包括请求拦截，post处理等
 */
import axios from 'axios';
import Router from 'vue-router';
import router from '../router/index.js';
import Cookies from 'js-cookie';
import { Toast } from 'vant';
const http = axios.create({
  baseURL: 'http://new.amadubai.co',
  // baseURL: _global.baseUrl,
  timeout: 300000
});

/*  http.defaults.headers.common['Authorization'] = 'Bearer '+Cookies.get('token');*/
/*http.defaults.withCredentials=true;*/

http.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    // 若是有做鉴权token , 就给头部带上token
    if (Cookies.get('token')) {
      config.headers.Authorization = 'Bearer ' + Cookies.get('token');
      //console.log('我带了token了')
    }
    if (config.method === 'post') {
      // 序列化
      // config.data = qs.stringify(config.data); // ***** 这里转义
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 对数据返回进行拦截
http.interceptors.response.use(
  res => {
    //console.log(res)

    /* window.spinIsShowFun('none')*/
    if (res.status === 200) {
      //判断验证信息
      if (res.data.error) {
        if (res.data.error.code === 401) {
          // console.log(222222222222);
          // /* 对未授权的处理*/
          // var time1 = Cookies.get('expired_at') - Date.parse(new Date());
          // var time2 = Cookies.get('refresh_expired_at') - Date.parse(new Date());
          // if (time1 < 0 && time2 > 0) {
          //   this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('token');
          //   this.$http.post(_global.baseUrl + '/passport/refresh').then(res => {
          //     Cookies.set('id', res.data.response.id);
          //     //带过期时间用来判断token是否过期
          //     Cookies.set('token', res.data.response.token);
          //     //此cookie用来作为调用refresh接口的参数
          //     Cookies.set('expired_at', Date.parse(res.data.response.expired_at));
          //     Cookies.set('refresh_expired_at', Date.parse(res.data.response.refresh_expired_at));
          //   })
          //   //router.push({name:'error'})
          //   this.$Message.warning("刷新一下试试");
          // } else if (time2 < 0) {
          // }
        } else if (res.data.error.code === 422) {
          Toast('信息填写有误，检查是否有信息未填写或填写错误');
        } else if (res.data.error.code === 403) {
          Toast(res.data.error.message);
          /*iView.Message.warning('没有权限')*/
          /* router.push({name:'login'})*/
        } else if (res.data.error.code == 20001) {
          Toast('用户不存在');
        } else if (res.data.error.code == 20002) {
          Toast('密码不正确');
        } else {
          Toast(res.data.error.message);
        }
      }
      /*//分路径处理
    if(res.data.config.url===_global.baseUrl+'/passport/login'){

    }*/
    } else {
    }

    return res;
  },
  error => {
    // 返回错误统一处理, vuex内无需另行处理，比如自身网络错误等

    console.log(Promise.reject(error));
    if (navigator.onLine) {
      Toast('网络错误，稍后再试');
    } else {
      Toast('网络已断开，请检查网络');
    }
    return Promise.reject(error);
  }
);

export default http;
