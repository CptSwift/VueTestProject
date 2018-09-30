// 入口文件
import Vue from 'vue'
import app from './App.vue'
import { Header, Button } from 'mint-ui'
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})