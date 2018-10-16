// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'

import app from './App.vue'
import router from './router'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'

import MintUI from 'mint-ui'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VuePreview)
Vue.use(Vuex)
Vue.use(MintUI)

Vue.http.options.root = 'http://vue.studyit.io'
Vue.filter('dataFormat', function (dataStr, pattern = "yyyy-mm-dd hh:mm:ss") {
    return moment(dataStr).format(pattern)
})

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: {
    	car: car
    },
    mutations: {
    	addToCar(state, goodsinfo){
    		var flag = false
    		state.car.some(item => {
    			if(item.id == goodsinfo.id){
    				item.count += parseInt(goodsinfo.count)
    				flag = true
    				return true
    			}
    		})
    		if(!flag){
    			state.car.push(goodsinfo)
    		}
    		
    		localStorage.setItem('car', JSON.stringify(state.car))
    	},
    	updateGoodsInfo(state, goodsinfo){
    		state.car.some(item => {
    			if(item.id == goodsinfo.id){
    				item.count = parseInt(goodsinfo.count)
    				return true
    			}
    		})
    	},
    	removeFormCar(state, id){
    		state.car.some((item, i) => {
    			if(item.id == id){
    				state.car.splice(i, 1)
    				return true
    			}
    		})
    		localStorage.setItem('car', JSON.stringfy(state.car))
    	},
    	updateGoodsSelected(state, info){
    		state.car.some(item => {
    			if(item.id == info.id){
    				item.selected = info.selected
    			}
    		})
    		localStorage.setItem('car', JSON.stringify(state.car))
    	}
    },
    getters: {
    	getAllCount(state){
    		var c = 0
    		state.car.forEach(item => {
    			c += item.count
    		})
    		return c
    	},
    	getGoodsCount(state) {
		    var o = {}
		    state.car.forEach(item => {
		      o[item.id] = item.count
      		})
		    return o
	    },
	    getGoodsSelected(state){
		    var o = {}
		    state.car.forEach(item => {
		      o[item.id] = item.selected
      		})
		    return o
	    },
	    getGoodsCountAndAmount(state){
	    	var o = {
	    		count: 0,
	    		amount: 0
	    	}
	    	state.car.forEach(item => {
	    		o.count += item.count
	    		o.amount += item.price * item.count
	    	})
	    	return o
	    }
    }
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})