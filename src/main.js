// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios'
// 全局配置 axios
axios.defaults.baseUrl = 'https://my-blog-1f8f8.firebaseio.com'

Vue.config.productionTip = false

// Vue.use(VueResource)
Vue.use(VueRouter)
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = '#'+Math.random().toString().slice(2,8)
//   }
// })
// 自定义指令  |  全局
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value =='wide'){
      el.style.maxWidth = "1260px"
    }else if(binding.value =='narrow'){
      el.style.maxWidth = "560px"
    }
    if(binding.arg == 'column'){
      el.style.background = "#6677cc";
      el.style.padding='20px';
    }
  }
})
// 自定义过滤器  |  全局 单个组件有 了就注释
// Vue.filter('to-uppercase',function (val) {
//   return val.toUpperCase();
// })
// Vue.filter('snippet',function (val) {
//   return val.slice(0,100) + '...'
// })

/* eslint-disable no-new */

//路由
const router = new VueRouter({
  routes: Routes,
  mode:'history'
})


new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
