import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@/Api'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  // States-stores data that will be used throughout the application
  state: {
    productList:[],
    cartItems:[],
    orders:[],
    userOrderedList:{},
    token:'',
    currentUser:null,
    loggedInUser:false
    
  },
  // Mutations-methods for modifying state
  mutations: {
      loadProducts(state,data){
          state.productList=data
      },
      addItem(state,item){
        state.cartItems.push(item);
      },
     
      loginAuthenticated(state,user){
        state.currentUser=user.user;
        state.loggedInUser=true;
        state.token= user.token;
      },
      addOrder(state,order){
        state.orders.push(order);

      },
      //displays all user orders
      setUserOrder(state,payload){
        state.userOrderedList=payload;
        for (let index = 0; index < payload.length; index++) {
          const data = [] 
          
          payload[index].items.forEach(element => {
              const product = state.productList.find(d => d._id == element)
              data.push(product)
          })
          payload[index].items = data
        }
  
        // state.userOrderList = payload
        console.log(payload)
      },
      
      
  },
  // Actions-  asynchronous operations that commit mutations
  actions: {
      async getProducts(context,payload){
         const res= await Api.getAllProducts(payload)
          context.commit('loadProducts',res)
      },
      // adds item to the cart
      addItem(context,item){
        context.commit("addItem",item);
      },
      //login a user
      async loginUser(context,payload){
        const res=await Api.userLogin(payload)
        
        context.commit('loginAuthenticated',res)

      },
     // create order
      async postOrder(context){
        console.log(this.state.token)
        console.log(this.state.cartItems)
        let result= await Api.submitOrder(this.state.cartItems,this.state.token)
         context.commit('addOrder',result)
        
      },
      // user order history
      async showUserOrder(context){
        console.log(this.state.token)
        const res= await Api.getUserOrders(this.state.token)
        context.commit('setUserOrder',res)
        console.log(res)

      },
      // register a user
      async registerToSinus(_,user){
        // used axios that installed to the project
        await axios.post('http://localhost:5000/api/register/',user)
        .then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      }
    
  },
  // Getters-computed properties based off of data in the store
  getters:{
      getListItems: state => {
          return state.productList
      },
      getCartItems: state => {
          return state.cart
      },
      // total price for all added items to the cart
      getTotalCartPrice: state => {
            let sum = 0;
            state.cartItems.map(item => {
                sum += item.price
            })

       return sum
      }, 
      // displays selected items to the cart
      totalCartItemCount: state => {
        return state.cartItems.length
      },
   
  },
  
  modules: {
  }
})
