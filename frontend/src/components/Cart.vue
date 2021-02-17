
<template>
    <div class="cart">
        <div class="product-list" v-for="(product,index) in cartItems"  :key="index">
                 <div class="item-info" :key="index" @click="removeFromCart(index)">
                <img class="imgFile" :src="require(`@/assets/${product.imgFile}`)">
              
                    <h3 class="title">{{product.title}}</h3>
                    <p class="shortDesc">  {{product.shortDesc}}</p>
                   <!-- <p class="serial"> {{product.serial}}</p>-->
                    <p class="price">  {{product.price}}</p>
                 </div>
           
        </div>
        <span class="total-price">
            <p class="total-lable">TOTAL</p>
            <p class="sek-lable"><strong >{{ $store.getters.getTotalCartPrice}}</strong></p>
        </span>
          <div> <a  @click="sendToOrder" class="btn" > <img class="btn-icon" src="@/assets/icon-bag-white.svg"> Buy</a></div>
            
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
      },
      removeFromCart(index){
            this.$store.commit('removeFromCart', index);
        },
  }
}
</script>

<style lang="scss" scoped>
.cart {
    border: 2px solid gray;
    margin-top: 5rem;
    position: absolute;
    top: 0;
    bottom: 0.1;
    left: 3;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: lightgray;
    width: 280px;
    height: auto;
    max-height: 800px;
    min-height: 150px;
    overflow-y:scroll;
    
    

  
    
    .product-list {
        display: flex;
        flex-direction:  row;
        align-items:flex-start;
        justify-content: flex-start;
        width: 250px;
        height: 45px;
        margin-bottom: 2rem;
      
       
    }
     .imgFile {
        // align-items: center ;
         //justify-content: flex-start;
         //display: flex;
         float: left;
         //margin-top: 1rem;
            width: 50px;
            height: 40px;
            border: 4px;
            img {
                float: left;
                width: 45px;
                height: 40px;
            }
        }
    .item-info {
        display: flex;
        flex-direction: row;
        //align-items: flex-start;
        //margin-left: 2rem;
        float: right;

        }
        .title {
            margin-left: 1rem;
            font-size: 11px;
            align-items: flex-start;
            height: 20px;
            margin-top: 1rem;

        }
        .shortDesc {
            //display: flex;
            //flex-direction: column;
            font-size: 9px;
            font-weight: bold;
            margin-top: 2rem;
            float: left;
//margin-right: 4rem;
            
        }
       /* .serial {
            display: flex;
            //margin-top: 5px;
            font-size: 7px;
           // margin-left: 37px;
            justify-content: flex-start;
            align-items: flex-start;
        }*/
        .price{
            display: flex;
            width:10px;
            align-items: flex-end;
            justify-content: flex-end;
            font-size: 12px;
            margin-left: 5rem;
            //margin-top: 2rem;
            //position: relative
        }
  
    .total-price{
        height: 20px;
        display: flex;
        font-size: 14px;
        font-weight: bold;
        margin-top: 0.5rem;
     .price{
         display: flex;
         align-items: flex-end;
         width: 20px;
         height: 10px;
         float: right;
     }
     }    
    .total-lable{
        color: black;
    }
     .sek-lable{
         margin-left: 10rem;
    }
  
}
.btn {
      cursor: pointer;  
      display: flex;
      flex-direction: row;
      align-items: center;
        color: white;
        height: 40px;
        width: 250px;
       
        .btn-icon{
            margin-left: 4.5rem;
            padding-right: 5px;
            
        }
    }
</style>