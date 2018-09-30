// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import app from './App.vue'
import router from './router'

import { Header, Swipe, SwipeItem } from 'mint-ui'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(VueRouter)
Vue.use(VueResource)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})