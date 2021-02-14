
<template>
    <div class="cart">
        <div id="product-list" v-for="(product,index) in cartItems"  :key="index">
            <div id="product-item" >
                <div id="imgFile">
                  
                <img :src="require(`@/assets/${product.imgFile}`)">
                   
                </div>
               <div id="item-info">
                    <div id="title">
                     
                      <h3>{{product.title}}</h3>
                    </div>
                    <div id="shortDesc">
                  <p>  {{product.shortDesc}}</p>
                    </div>
                    <div id="serial">
                    
                    <p> {{product.serial}}</p>
                    </div>
                </div>
                <div class="price"  id="price">
                    <p class="price">
                         {{product.price}}
                   </p>
                </div>
            </div>
        </div>
        <hr class="line">
        <span class="total-price">
            <p class="total-lable">TOTAL</p>
            <p class="sek-lable"><strong >{{ $store.getters.getTotalCartPrice}}</strong></p>
        </span>
        <div class="btn" id="btn" @click="sendToOrder">
           <a href="@/views/MakeOrder"> <img class="btn-icon" src="@/assets/icon-bag-white.svg"></a>
            Buy
        </div>
    </div>
</template>
<script>

export default {
    name: "Cart",
    props:{cartItem:Object},
    data(){
        return{
            showModal: false,
            totalSum:0,
        }
    },
    computed: {
                                
    cartItems(){
        return this.$store.state.cartItems
    },
   
  },
  methods:{
      sendToOrder(){


        this.$router.push('/MakeOrder')
      }
  }
}
</script>

<style lang="scss" scoped>
.cart {
    border: 2px solid burlywood;
    margin-top: 5rem;
    position: absolute;
    top: 0;
    bottom: 0.1;
    left: 3;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#009999;
    width: 250px;
    height: 250px;
    box-shadow: 7px 2px 8px rgba(0, 0, 0, 0.33);
      overflow-y: auto;
      cursor: pointer;

    .btn {
        display: flex;
        flex-direction: row;
        background-color: black;
        align-items: center;
        justify-items: center;
        border: none;
        color: white;
        border-radius: 0.25rem;
        height: 45px;
        width: 81%;
        margin-top: 0.5rem;
        cursor: pointer;
        margin-bottom: 0.5rem;
        .btn-icon{
            margin-right: 5px;
            width: 20px;
            height: 20px;
            margin-left: 2rem;
        }
    }
    #product-list {
        height: 180px;/* or any height you want */
      
    
    #product-item {
        display: flex;
        align-items: flex-start;
        margin-right: 8rem;
        margin-top: 1rem;
        width: 100px;
        #imgFile {
            margin-right: 8px;
            width: 25px;
            height: 30px;
            border: 4px;
            img {
                
                width: 30px;
                height: 30px;
            }
        }
    }
    #item-info {
       // align-items: flex-start;
        display: flex;
        flex-direction: column;
        position: absolute;
       // margin-left: 0.5rem;
        #title {
            //margin-left: 0.5rem;
            font-size: 15px;
            margin-left: 10px;
        }
        #shortDesc {
            //margin-left: 0.5rem;
            font-size: 10px;
            margin-top: 5px;
            margin-left: 35px;
        }
        #serial {
            margin-top: 5px;
            font-size: 8px;
            margin-left: 37px;
        }
        #price{
            width:40px;

        }
    }
       
    }
     }
     .price{
         display: flex;
         align-items: flex-end;
         width: 20px;
         height: 10px;
            //margin-left: 4rem;
            margin-top: 1.4rem;
            margin-left: 70px;
     }
   
    .line{
        width: 100%;
        height: 3px;
        border: none;
        color: black;
        background-color: black;
    }
    .total-price{
        font-size: 14px;
        display: inline;
       //flex-direction: row;
        font-weight: bold;
    }
    .total-lable{
        color: black;
        //display: flex;
        //align-items: flex-start;
        float: left;
        margin-right: 5rem;
    }
     .sek-lable{
         margin-left: 3rem;
        float: right;
        
    }

</style>