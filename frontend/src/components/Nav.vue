<template>
    <div class="Nav">
        <div class="nav-bar">
            <img src="~@/assets/sinus-logo.svg">
            <div class="right-side">
                <router-link style="text-decoration:none;" class="products" to="/Products">Products</router-link>
                <router-link style="text-decoration:none;" class="register" to="/">Register</router-link>
                <button  class="profile-btn"><img class="profile-img" src="~@/assets/icon-user-black.svg"></button>
                <router-link to="/cart" class="cart-btn"><img class="cart-img" src="~@/assets/icon-bag-white.svg" ></router-link>
                <router-link to="/Admin" class="cart-btn"><img class="cart-img" src="~@/assets/icon-bag-white.svg" >
                            <div class="round-btn">
                                <div class="cart-icon">
                                kassa({{orderedItemsInCart}})
                               </div>
                            </div>
                           
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
export default {

    computed: {
    orderedItemsInCart() {
      return this.$store.getters.totalCartItemCount;
    },
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
</style> 