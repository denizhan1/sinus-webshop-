import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList:[],
    cartList:[],
    selectedProduct:null,
  },
  mutations: {
      loadProducts(state,data){
          state.productList=data
      },
                               
    ADD_ITEM(state,object){
      state.cartList.push(object)
    },
    // setSelectedProduct(state,product){
    //   state.selectedProduct=product
    // }

  },
  actions: {
      async getProducts(context,payload){
         const res= await Api.getAllProducts(payload)
          context.commit('loadProducts',res)
      },
      addItem(context,product){
        context.commit("ADD_ITEM",product)
      },
      // setSelectedProduct(context,product){
      //   context.commit('setSelectedProduct',product)
      // }
  },
  getters:{
    getListItems: state => {
        return state.productList
    },
  //   getCartItems: state => {
  //     return state.cart
  // },
  cartList:(state)=>state.cartList,
  // selectedProduct:(state)=>state.selectedProduct
  },
  
  modules: {
  }
})
