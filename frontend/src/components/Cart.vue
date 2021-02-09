<template>
  <main class="main-container"> 
      <div class="sub-content modal">
            <ul class="ordered-lists">
                <li  v-for="(product, index) in cartItems" :key="index">
                    <div class="cart-item">
                        <div class="product-image"
                           v-bind:style="{ 'background-image': `url(${require('@/assets/' + `${product.imgFile}`)})`}">   
                        </div>
                        <div class="product-info">
                            <h2>{{product.title}}</h2>
                            <h5>{{product.shortDesc}}</h5>
                            <p>{{product.serial}}</p>

                        </div>
                        <div class="product-price">
                            <h5>{{product.price}}</h5>
                        </div>
                    </div>
                </li>

            </ul>
             <hr>
                    <div class="cart-total-price">
                        <p>Total</p>
                        <h6>1000 SEK</h6>
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
import { mapGetters } from "vuex";
export default {
    name: "Cart",
    data(){
        return{
            totalSum:0,
        }
    },
    computed: {
    ...mapGetters({
      products: "getCartItems",
    }),
    cartItems() {
      let x = [];
      for (let item of this.products) {
        let i = x.findIndex((y) => y.id === item.id);
        if (i < 0) {
          x.push(item);
        } else {
          console.log("no thank you");
        }
      }
      return x;
    },
  },
}
</script>

<style lang="scss">
 .main-container{

   .sub-content{
     display: flex;
     flex-flow: column;
     background-color: white;
      .cart-item{
          display: flex;
          justify-content: space-around;
          width: 100%;
    
     padding: 2em;
        .product-image {
                height: 2rem;
                width: 2rem;
                background-size: cover;
                background-position: center;
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
 }
 



    
</style>