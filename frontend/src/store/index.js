import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@/Api'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    productList:[],
    cartItems:[],
    orders:[],
    //more update
    token:'',
    currentUser:null,
    loggedInUser:false
    
  },
  mutations: {
      loadProducts(state,data){
          state.productList=data
      },
      addItem(state,item){
        state.cartItems.push(item);
      },
      //has to be changed later
      loginAuthenticated(state,user){
        state.currentUser=user.user;
        state.loggedInUser=true;
        state.token= user.token;
      },
      addOrder(state,order){
        state.orders.push(order);

      }

     
  },
  actions: {
      async getProducts(context,payload){
         const res= await Api.getAllProducts(payload)
          context.commit('loadProducts',res)
      },
      addItem(context,item){
        context.commit("addItem",item);
      },
      async loginUser(context,payload){
        const res=await Api.userLogin(payload)
        
        context.commit('loginAuthenticated',res)

      },
      //more update
      async postOrder(context){
        console.log(this.state.token)
        console.log(this.state.cartItems)

        let result= await Api.submitOrder(this.state.cartItems,this.state.token)
         context.commit('addOrder',result)
        
      },
      
      async registerToSinus(_,user){
        
        await axios.post('http://localhost:5000/api/register/',user)
        .then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
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
    //   isLoggedIn: state => {
    //     let loggedInBool = state.token !== ''
    //         && state.currentUser !== ''
    //         && state.token.length > 0
    //         && state.currentUser.length > 0;
    //     return loggedInBool
    // },
  
  },
  
  modules: {
  }
})
