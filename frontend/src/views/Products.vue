<template>
 <section class="body">
      <!-- <Cart/> -->
     <Nav/>
      <div v-if="showSelectedProduct" >
                       <ProductView :product="selectedProduct"/>
                                  
                                
       </div>
            <main class="main-container">
                    <div class="list-items" v-for="product in getListItems" :key="product.id"   @click="openProduct(product)">
                                <div class="sub-header">
                                    <h2 class="item-name">{{product.title}}</h2>
                                    <button class="icon">
                                        <img src="@/assets/icon-bag-black.svg" alt />
                                    </button>
                                </div>
                            <p class="short-desc">{{product.shortDesc}}</p>
                                <div  class="img-holder"
                                        :style="{'background-image':'url('+ getImage(product) +')'}">
                                   <span class="product-cost">
                                      <p class="product-price">{{product.price}}</p>
                                      <p class="product-currency">SEK</p>
                                    </span>
                                </div>
                               
                     </div>
                    
                  
            </main>
           
  </section>
</template>

<script>
import Nav from '@/components/Nav.vue'
import ProductView from '@/components/ProductView.vue'

// import Cart from '@/components/Cart.vue'
export default {
  props:{
      product:Object
  },
 data() { return {
    
  
    selectedProduct: String,
    showSelectedProduct: false
  }},
        components:{
            Nav,
            // Cart
            ProductView,
        },
          
        computed: {
            getListItems() {
             
              return this.$store.getters.getListItems;
            },
            
          },
        methods:{
          openProduct(product){
            this.showSelectedProduct=!this.showSelectedProduct
            this.selectedProduct=product
          },
              getImage(product) {
              return require(`@/assets/${product.imgFile}`);
            },
          
                                
      },
      created(){
      this.$store.dispatch('getProducts')
    }
  }
</script>

<style lang="scss" scoped>
.body{
    background: #E5E5E5;
}
.main-container{
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto auto auto;
    cursor: pointer;
   
}
.list-items {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 14px rgba(1, 1, 1, 0.06);
  height: 400px;
  width: 480px;
  padding-top: 1.5rem;
  background-color: white;
 

  .sub-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    .item-name {
      font-size: 20px;
      font-weight: bold;
    }
    .icon {
      width: 29px;
      height: 29px;
      border-radius: 50px;
      background-color: #eee;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .short-desc {
    align-self: flex-start;
    margin: 0.2rem 0px 0px 1rem;
    font-size: 17px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
  }
  .img-holder {
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    .product-cost {
      display: flex;
      flex-direction: row;
      background-color: black;
      width: 122px;
      height: 47px;
      border-radius: 30px;
      color: white;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
      margin-bottom: 2rem;
      .product-price{
        font-size: 28px;
        font-weight: 700;
      }
      .product-currency {
        font-size: 13px;
        font-weight: 400;
        margin-top: -4px;
        margin-left: 5px;
      }
    }
  }
}

</style>