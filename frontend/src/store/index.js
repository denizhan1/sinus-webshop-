import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList:[],
    cartItems:[],
    // selectedProduct:null,
  },
  mutations: {
      loadProducts(state,data){
          state.productList=data
      },
      addItem(state,item){
        state.cartItems.push(item);
      }
                        

  },
  actions: {
      async getProducts(context,payload){
         const res= await Api.getAllProducts(payload)
          context.commit('loadProducts',res)
      },
      addItem(context,item){
        context.commit("addItem",item);
      }
    
     
  },
  getters:{
      getListItems: state => {
          return state.productList
      },
      getCartItems: state => {
          return state.cart
      },
      getTotalCartPrice: state => {
            let sum = 0;
            state.cartItems.map(item => {
                sum += item.price
            })

       return sum
      }, 
      totalCartItemCount: state => {
        return state.cartItems.length
      },
  
  },
  
  modules: {
  }
})
