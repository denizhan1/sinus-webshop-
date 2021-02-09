import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList:[],
    cart:[],
  },
  mutations: {
      loadProducts(state,data){
          state.productList=data
      },
      pushToCart(state, payload) {
        const element = state.cart.find(p => p.id === payload.id)
        if (!element) {
            payload.quantity = 1
            state.cart.push(payload)
        } else {
            element.quantity += 1
            state.cart.push(element)
        }
    },
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
    getCartItems: state => {
      return state.cart
  },
  },
  modules: {
  }
})
