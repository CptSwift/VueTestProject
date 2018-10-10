// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'

import app from './App.vue'
import router from './router'

import { Header, Swipe, SwipeItem, Button } from 'mint-ui'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VuePreview)
Vue.use(Vuex)

Vue.http.options.root = 'http://vue.studyit.io'
Vue.filter('dataFormat', function (dataStr, pattern = "yyyy-mm-dd hh:mm:ss") {
    return moment(dataStr).format(pattern)
})

var store = new Vuex.Store({
    state: {

    },
    mutations: {

    }
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
    store
})