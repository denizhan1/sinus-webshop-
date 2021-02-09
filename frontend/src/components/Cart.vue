<template>
  <main class="main-container"> 
      <div class="sub-content modal">
            <ul class="ordered-lists">
                <li>
                    <div class="cart-item">
                        <div class="product-image"
                            v-bind:style="{ 'background-image': `url(${require('@/assets/hoodie-ocean.png')})`}">   
                        </div>
                        <div class="product-info">
                            <h2>product-title</h2>
                            <h5>product-short description</h5>
                            <p>product-serial-number</p>

                        </div>
                        <div class="product-price">
                            <h5>product-price</h5>
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
export default {
    name: "Cart"
}
</script>

<style lang="scss">
 .main-container{
 height: 700px;
 width: 500px;
   .sub-content{
     display: flex;
     flex-flow: column;
     background-color: white;
      .cart-item{
          display: flex;
          justify-content: space-around;
    //  display: grid;
    //  grid-template-columns: auto auto auto;
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
            
            border-bottom: 1px solid var(--LightGrey);
            opacity: .3;
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
 .modal{
     position: fixed; /* Stay in place */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
//   width: 100vw; /* Full width */
//   height: 100vh; /* Full height */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
 }



    
</style>