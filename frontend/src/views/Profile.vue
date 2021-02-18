
<template>
  <div >
<Nav/>
  <div class="container">
<h2  class= "profile"> </h2>
<div class="card">
  <img :src="require('@/assets/skateboard-greta.png')" class="img"> 
  <h1>{{user.name}}</h1>
  <div  class="profile-container">
    <p>Email :{{user.email}}</p>
    <p>Address: {{user.adress.street}}</p>
    <p>City: {{user.adress.city}}</p>
    <p>zip Code: 19635{{user.adress.zipcode}}</p>
      <p><button @click="logout">Logout</button></p>
  </div>
</div>  
 <div class="border-menu">
      <h1>Your order history!</h1>
      <ul  v-for="(order) in  fetchUserOrderHistory" :key="order._id" class="list">
        <li v-for="(item, index) in order.items" :key="index">
        <p>Title: {{item.title}}</p>
        <p>Description: {{item.shortDesc}}</p>
        <p>Price: {{item.price}}</p>
        <p>Status: {{order.status}}</p>
        <p>Order date: {{orderDate(order.timeStamp)}}</p>
        <hr>
        </li>
      </ul>         
  </div>
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
      },
      fetchUserOrderHistory(){
        return this.$store.state.userOrderedList
      }
    },
    created() {
      this.$store.dispatch('getProducts')
       this.$store.dispatch('showUserOrder')
    },
    beforeMounted() {
      this.$store.dispatch('getProducts')
       this.$store.dispatch('showUserOrder')
    },
      mounted(){ 
      this.$store.dispatch('showUserOrder')
    },

    methods:{
     orderDate(){
       const date = new Date()
       return date.toDateString() 
     },
     logout(){
        window.location.replace('/')
      }
    }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.list{
    list-style: none;
    display: flex;
    flex-direction: column
}
.border-menu{
    justify-content: flex-start;
    text-align: left;
    margin-top: 4rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-style: solid;
    height: 500px;
    width: 300px;
    background-color: whitesmoke;
    border: none;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    overflow-y: auto;
}
.card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 500px;
  margin-right: 2rem;
  text-align: center;
  font-family: arial;
  margin-top: 4rem;
}
.img{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
}
.profile-container{
  margin: 24px 0
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

