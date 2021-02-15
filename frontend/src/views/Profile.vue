
<template>
  <div >

<Nav/>
<h2  class= "profile">User Profile </h2>

<div class="card">
  <a hre></a>
  <img :src="require('@/assets/skateboard-greta.png')" alt="John" style="width:60%"> 
  <h1>{{user.name}}</h1>
  
  <p>Harvard University</p>
  <div style="margin: 24px 0;">
    <p>Email :{{user.email}}</p>
    <p>Address: {{user.adress.street}}</p>
    <p>City: {{user.adress.city}}</p>
    <p>zip Code: {{user.adress.zipcode}}</p>
   
  </div>
  <p><button>www.sinus.com</button></p>
</div>


    <!-- <p>{{user.name}}</p>
    <Button>Logout</Button>
    
    <form class="reg-side">
            <label >
                Name
                <input type="text" v-model="user.name" />
            </label>
            <label class="col-4">
                Email
                <input type="email" v-model="user.email" />
            </label>
           
            <h2>Adress</h2>
            <label class="col-4">
                Street
                <input type="text" v-model="user.adress.street" />
            </label>
                    <label class="zip-code">
                Zip Code
                <input type="text" v-model="user.adress.zip" />
            </label>
                    <label class="city">
                City
                <input type="text" v-model="user.adress.city" />
            </label> 
            <h3 class="payment-text">Payment</h3>
                    <label class="inputs"  for="" >Card Owner</label>
                    <input class="details" type="text" v-model="user.adress.cardOwner">
                    <label class="inputs"  for="">Card Number</label>
                    <input class="details" type="text" v-model="user.adress.cardNumber"> 
                    <div class="left">
                    <label class="lable-left"  for="">Valid untill</label> 
                    <label class="lable-right"  for="">CVV</label>
                    </div>
                    <div class="right">
                    <input class="input-details" type="text"  v-model="user.adress.validUntill">
                    <input class="input-details" type="password"   v-model="user.adress.cvv">
                    </div>
           
         </form> -->
   
      
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
    name:'Profile',
     components:{Nav},
    computed:{
      user(){
        return this.$store.state.currentUser
      }
    },
    mounted(){
      this.fetchUserOrder();
    },

    methods:{
      fetchUserOrder(){
        this.$store.dispatch('showUserOrder')
      }
    }

}
</script>

<style scoped>
/* .border-seccond{
    height: 500px;
    width: 400px;
    margin-top: 6rem;
    margin-left:5rem ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.left{
    display: flex;
    justify-content: space-between;
    float: left;
    
}
.inputs {
    font-size: 13px;
    color: lightgray;
    margin-top: 5px;
}
.lable-left{
    font-size: 13px;
    color: lightgray;
    margin-top: 5px;
    
}
.lable-right{
    font-size: 13px;
    color: lightgray;
    margin-top: 5px;
    margin-left: 7rem;
}
.details{
    height: 2rem;
    width: 21.8rem;
}
.input-details{
    height: 2rem;
    margin-left: 2px;
}
.payment-text{
    margin-top: 3rem;
}
.your-details{
    margin-bottom: 2rem;
}
.cart-img{
    width: 20px;
    height: 20px;
} */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
.profile{
  text-align:center;
  margin-bottom: 20px;
}



</style>>

