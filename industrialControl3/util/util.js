/**
 * Created by Administrator on 2018/7/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../vuex/store'
import route from "../../router";

Vue.use(Vuex)
//服务器路径
var headUrl = 'http://mp.flins.com.cn/boss';//测试环境

export const isNumber = (val) => {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }

}

export default {
  getapiAccess: function (name) {
    if(sessionStorage.getItem("buttonList")){
      let arr = sessionStorage.getItem("buttonList")
      let arr1 = arr.split(',')
      let arr2=[]
      for(let i = 0;i<arr1.length;i++){
        arr2.push(arr1[i].replace(/:/g, '/'))
      }
      if(arr2.indexOf(name) > -1){
        return true
      }else{
        return false
      }
    }else{
      route.push('/');
    }
  },
  // 获取当前时间，最近七天，最近一个月时间
  getTime: function (type) {
    var date
    if(type == 'today'){//当前时间
      date = new Date();
    }else if(type == 'week'){//最近七天
      var now = new Date();
      date = new Date(now.getTime() - 6 * 24 * 3600 * 1000);
    }else if(type == 'month'){//最近三十天
      var now = new Date();
      date = new Date(now.getTime() - 30 * 24 * 3600 * 1000);
    }
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10 ){
      month = "0" + month;
    }
    var day = date.getDate();
    if (day < 10 ){
      day = "0" + day;
    }
    return year + '-' + month + '-' + day
  },
  getTime2: function (type) {
    var date
    if(type == 'today'){//当前时间
      var now = new Date();
      date = new Date(now.getTime() - 1 * 24 * 3600 * 1000);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      if (month < 10 ){
        month = "0" + month;
      }
      var day = date.getDate();
      if (day < 10 ){
        day = "0" + day;
      }
      return year + '-' + month + '-' + day
    }else if(type == 'week'){//最近七天（排除今天）
      var now = new Date();
      date = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      if (month < 10 ){
        month = "0" + month;
      }
      var day = date.getDate();
      if (day < 10 ){
        day = "0" + day;
      }
      return year + '-' + month + '-' + day
    }else if(type == 'monthstart'){//上个月第一天和最后一天
      var nowdays = new Date();
      var year = nowdays.getFullYear();
      var month = nowdays.getMonth();
      if(month==0)
      {
        month=12;
        year=year-1;
      }
      if (month < 10) {
        month = "0" + month;
      }
     return year + "-" + month + "-" + "01";//上个月的第一天
    }else if(type == "monthend"){
      var nowdays = new Date();
      var year = nowdays.getFullYear();
      var month = nowdays.getMonth();
      if(month==0)
      {
        month=12;
        year=year-1;
      }
      if (month < 10) {
        month = "0" + month;
      }
      var lastDay = new Date(year, month, 0);
      return year + "-" + month + "-" + lastDay.getDate();//上个月的最后一天
    }
  },
  headUrl: headUrl
}
