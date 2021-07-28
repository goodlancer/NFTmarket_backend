// import { resolve } from 'core-js/fn/promise'
// import { reject, resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios')
const API = 'http://18.117.57.180:3000'
// const API = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    account: {},
    token: localStorage.getItem('user-token') || '',
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_ACCOUNT (state, data) {
      state.account = Object.assign({}, data)
    },
  },
  actions: {
    loginUser: function (context, { email, password }) {
      console.log(email)
      return new Promise((resolve, reject) => {
        axios.post(`${API}/v1/users/login`, { email: email, password: password }).then((res) => {
          console.log(res.data)
          if (res.data.success && res.data) {
            localStorage.setItem('user-token', res.data.token) // store the token in localstorage
            context.commit('SET_ACCOUNT', res.data.user)
            resolve(res.data.success)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          console.error(err)
          reject(new Error(err))
        })
      })
    },
    SignupUser: function (context, { email, password, username }) {
      return new Promise((resolve, reject) => {
        const phone = '282562585'
        const uniquekey = Math.floor(Math.random() * 3000000).toString()
        axios.post(`${API}/v1/users`, { email: email, password: password, name: username, unique_key: uniquekey, phone: phone }).then((res) => {
          console.log(res.data)
          if (res.data.success && res.data) {
            localStorage.setItem('user-token', res.data.token) // store the token in localstorage
            context.commit('SET_ACCOUNT', res.data.user)
            resolve(res.data.success)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          console.error(err)
          reject(new Error(err))
        })
      })
    },
    getkeywords: function () {
      return new Promise((resolve, reject) => {
        axios.get(`${API}/v1/keywords`).then((res) => {
          console.log(res)
          if (res.data.success) {
            resolve(res.data.keywords)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          reject(new Error(err))
        })
      })
    },
    addWebsite: function (context, { name }) {
      console.log('myworking')
      console.log(name)
      return new Promise((resolve, reject) => {
        axios.post(`${API}/v1/website`, { name: name }).then((res) => {
          console.log(res)
          if (res.data.success) {
            resolve(res.data.success)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          reject(new Error(err))
        })
      })
    },
    getWebsite: function () {
      return new Promise((resolve, reject) => {
        axios.get(`${API}/v1/website`).then((res) => {
          console.log(res)
          if (res.data.success) {
            resolve(res.data.website)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          reject(new Error(err))
        })
      })
    },
    addmember: function (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${API}/v1/member`, data).then((res) => {
          console.log(res)
          if (res.data.success) {
            resolve(res.data.success)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          reject(new Error(err))
        })
      })
    },
    getmember: function (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${API}/v1/organizemember`, data).then((res) => {
          console.log(res)
          if (res.data.success) {
            resolve(res.data.getOrganize)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          reject(new Error(err))
        })
      })
    },
    addTutorial: function (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${API}/v1/tutorial`, data).then((res) => {
          console.log(res)
          if (res.data.success) {
            resolve(res.data.success)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          reject(new Error(err))
        })
      })
    },
    getTutorials: function () {
      return new Promise((resolve, reject) => {
        axios.get(`${API}/v1/tutorial`).then((res) => {
          console.log(res)
          if (res.data.success) {
            resolve(res.data.tutorial)
          } else {
            reject(new Error(res.data.msg))
          }
        }).catch((err) => {
          reject(new Error(err))
        })
      })
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
  },
})
