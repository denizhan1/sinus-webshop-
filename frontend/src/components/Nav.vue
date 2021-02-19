<template>
<div id="app" class="Nav">
    <nav class="navigation">
        <div class="nav-bar">
             <img class="logo" src="~@/assets/sinus-logo.svg">
            <div class="right-side">
                <router-link style="text-decoration:none;" class="products" to="/products">Products</router-link>
                <div v-if="!userIsLoggedIn">
                     <button   @click="showProfile" class="profile-btn"><img class="profile-img" src="~@/assets/icon-user-black.svg"></button>
                </div>
                <div v-else>
                    <p  @click="goToProfile"  class="user-name">{{this.userIsLoggedIn.name}}</p>
                </div>
                <Login v-if="showP"/>
               <div class="icon">
                    <button @click="showCart" class="cart-btn"><img class="cart-img" src="~@/assets/icon-bag-white.svg"></button>
                    <p class="order-num">{{orderedItemsInCart}}</p>
                </div>
                  <Cart v-if="showC"/>
            </div> 
            </div>
    </nav>
 </div>
</template>

<script>
import Cart from './Cart.vue'
import Login from './Login.vue'
export default {
  components: { Cart, Login },
    name: 'Nav',
    data() { return{
        showC: false, // showC is show cart
        showP: false // showP is show user login profile
        }
    },
    computed:{
        orderedItemsInCart() {
            return this.$store.getters.totalCartItemCount;
        },
        userIsLoggedIn(){
            return this.$store.state.currentUser
        },
  },
    methods: {
        showProfile() {
            if (this.showC) {
                this.showC=false;
            }
            this.showP = !this.showP
        },
        showCart(){ 
            if (this.showP) {
                this.showP=false;
            }
            this.showC = !this.showC
        },
         goToProfile(){
        this.$router.push('/profile')
    }
    },
}
</script>

<style lang="scss" scoped>
img {
    height: 100px;
    width: 100px;
}
.nav-bar {
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
   cursor: pointer;
}
.right-side {
    height: 50px;
    :visited{
        color: black;
    }
    :link{
        color: black;
    }
    :hover{
        color: darkgrey;
    }
    display: flex;
    text-decoration-line: none;
    margin: 10px;
    gap: 10px;
}
.profile-btn{
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-items: center;
    border-radius: 100px;
    background-color: lightgray;
    border: none;
    width: 30px;
    height: 30px;
    cursor:pointer;
    .profile-img{
        width: 20px;
        height: 20px;
        margin-left: auto;
        margin-right: auto;
    }
}
.cart-btn{
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-items: center;
    border-radius: 100px;
    background-color: red;
    width: 30px;
    height: 30px;
    border: none;
    cursor:pointer;
    .cart-img{
        width: 20px;
        height: 20px;
        margin-left: auto;
        margin-right: auto;
    }
}
.products{
    margin-left: 15px;
    margin-top: 26px;
}
.register{
    margin-left: 15px;
    margin-top: 26px;
}
.order-num{
 width: 22px;
    height: 22px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    margin-right: 10px;
    z-index: 5px;
}
.icon{
    display: flex;
    flex-direction: row;
}
.navigation{
    background-color: #E5E5E5;
}
.user-name{
    margin-top: 26px;
}
</style> 