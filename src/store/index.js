import { createStore } from 'vuex'
import messengerModule from './messengerModule'
import auth from './auth'
import fetchInfo from './fetchInfo'
import createChat from './createChat'
import messageMethods from './messageMethods'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    messeng: messengerModule,
    auth, fetchInfo, createChat, messageMethods
  }
})
