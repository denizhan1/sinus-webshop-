<template>
    <section class="modal">
        <div class=" productview-page"  >
        <div>
            <img :src="getImage(product)" alt="" class="image-view">

        </div>
                <main class="right-side">
                   
                    <div class="product-price" ></div>

                        <div class="product-detail" >
                               <h2>{{this.product.title}}</h2>
                                <h3>{{this.product.shortDesc}}</h3>
                                <p>{{this.product.longDesc}}</p>
                                <h6>{{this.product.price}} sek</h6>
                               
                               <div id="btn" >
                            <img src="@/assets/icon-bag-white.svg">
                            <label id="order-label" @click="addTocart()">Take my money</label>
                        </div>
                               
                       </div>

                </main>



       
    </div>
    </section>
</template>

<script>
export default {
   props: {
        product: Object,
        showSelectedProduct: String
    },
methods:{

    getImage(product){
        return require(`@/assets/${product.imgFile}`);
    },
    addTocart(){
        // console.log(this.$store.state.cartItems);
        console.log(this.product)
        this.$store.dispatch("addItem",this.product)
    }


   
}
}
</script>

<style lang="scss" scoped>
.modal{
    position: fixed; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    left: 0;
    top: 0;
    width: 50%; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.9); 
}

.productview-page{
    background-color: white;
    border: 2px solid black;
     width: 85%;
    text-align: center;
    padding: 1rem;
    display: flex;
   
    
   
}
.product-detail{
    text-align: left;
    
    padding: 0.5rem;
    min-width: 250px;
   
}
.image-view{
    height: 100%;
    width: 22rem;
    align-self: left;
    // margin-top: 1rem;
    border: 1px solid red;
    
  
}
.right-side{
    display: flex;
    flex-flow: column;
}
h2{
        text-transform: uppercase;
    }
    h3,h2{
        padding-bottom: 0.5rem;
    }
    h6{
        margin-top: 5px;
        font-size: large;
    }
    .send-btn{
         background-color: black;
            border-radius: 140px;
            margin-top: 16px;
          
            
    }
    .text{
        color: white;
    }
    #btn {
    height: 60px;
    width: 210px;
    background-color: black;
    border-radius: 50px;
    color: white;
    margin-left: 20%;
    margin-top: 35px;
    padding: 12px;
    img {
        margin-right: 8px;
    }
}

</style>