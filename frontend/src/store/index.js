import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList:[],
  },
  mutations: {
      loadProducts(state,data){
          state.productList=data
      }
  },
  actions: {
      async getProducts(context,payload){
         const res= await Api.getAllProducts(payload)
          context.commit('loadProducts',res)
      }
  },
  getters:{
    getListItems: state => {
        return state.productList
    },
  },
  modules: {
  }
})
