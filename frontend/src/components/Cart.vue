<template>
  <main class="main-container"> 
      <div class="sub-content modal">
          
            <ul class="ordered-lists">
                <li v-for="(product,index) in cartItems" :key="index">
                    <div class="cart-item">
                        <div class="product-image">
                            <img :src="require(`@/assets/${product.imgFile}`)" alt="" class="image">
                          
                        </div>
                        <div class="product-info">
                            <h2>{{product.title}}</h2>
                            <h5>{{product.shortDesc}}</h5>
                            <p>{{product.serial}}</p>
                        </div>
                        <div class="product-price">
                            <h6>{{product.price}}</h6>
                        </div>
                    </div>
                </li>

            </ul>
             <hr>
                    <div class="cart-total-price">
                        <h3 id="total">Total</h3>
                        <h3 id="total-price">{{ $store.getters.getTotalCartPrice}}</h3>
                    </div>
                    <button class="buy-product">
                    <img src="@/assets/icon-bag-white.svg" alt="" class="btnImage" />
                        <h6 class="take">Take my money!</h6>

                    </button>
                
                <div>

            </div>
      </div>
  </main>
</template>

<script>

export default {
    name: "Cart",
    data(){
        return{
            totalSum:0,
        }
    },
    computed: {
                                
    cartItems(){
        return this.$store.state.cartItems
    },
   
  },
}
</script>

<style lang="scss">
 .main-container{
     width: 50%;
   
 }
 .image{
     width: 40px;
     height: 40px;
 }
 .sub-content{
     display: flex;
     flex-flow: column;
     background-color: white;
      .cart-item{
          display: flex;
          justify-content: space-between;
          width: 100%;
    
     padding: 2em;
        .product-image {
                height: 2rem;
                width: 2rem;
               
                
            }
             .product-info {
                display: flex;
                flex-direction: column;
                h3 {
                    text-transform: uppercase;
                }
            }
            .price {
                display: flex;
                flex-direction: column;
               
            }
 }
   hr {
            align-self: center;
            width: 80%;
            
            
        }
        .cart-total-price{
            display: flex;
            justify-content: space-between;
            margin: 2rem;
            text-transform: uppercase;
        }
         .buy-product {
            width: 75%;
            padding-left: 4.5rem;
            padding-top: .5rem;
            padding-bottom: .5rem;
            align-self: center;
            text-align: center;
            display: flex;
           
            background-color: black;
            border-radius: 140px;
            .take{
                margin-top: 12px;
                color: white;
            }
         
        }

 }
 #total{
     margin-left: 40px;
 }
 #total-price{
     margin-right: 80px;
 }
 



    
</style>