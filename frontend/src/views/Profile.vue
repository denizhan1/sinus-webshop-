
<template>
  <div >
<Nav/>
<div v-for="(order) in user.orderHistory" :key="order._id" class="items">
 <p>{{order}}</p>
</div>

<h2  class= "profile"> </h2>

<div class="card">
 
  <img :src="require('@/assets/skateboard-greta.png')" alt="Maria" style="width:60%"> 
  <h1>{{user.name}}</h1>
  
  <div style="margin: 24px 0;">
    <p>Email :{{user.email}}</p>
    <p>Address: {{user.adress.street}}</p>
    <p>City: {{user.adress.city}}</p>
    <p>zip Code: 19635{{user.adress.zipcode}}</p>
   
  </div>
  <p><button @click="logout">Logout</button></p>

  <p>{{user.orderHistory}} </p>

</div>
<div v-for="(order) in user.orderHistory" :key="order._id" class="items">
 <p>{{order}}</p>

</div>  
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
      },
      logout(){
        window.location.replace('/register')
      }
    }

}
</script>

<style scoped>

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
.items{
  color: black;
}


</style>>

