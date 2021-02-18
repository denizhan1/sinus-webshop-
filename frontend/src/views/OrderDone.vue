<template>
    <main class="grid-container">
      <Nav />
        <section class="img">
            <h1>Thank you for your order!</h1>
        </section>
        <section class="text-first">
            <h1 class="text-">Your order is beeing processed, go out and skate while you wait</h1>
            <p class="column">Vans Calfornia Daze rock and roll chicken wing pogo transfer. Powerslide pivot slam Sidewalk Surfer durometer. Deck full-cab gap Old Ghosts ho-ho. Invert melancholy feeble rocket air. Hanger rock and roll g-turn ledge. 50-50 Kevin Harris boardslide street Mark Gonzales. Air pool hang-up fakie out Randy Ruiz. Steps nose bump powerslide axle set. Future Primitive Japan air snake steps camel back. Face plant crailtap rail slide half-cab. Rail regular footed flypaper drop in. Casper slide speed wobbles indy grab ollie hole. </p>
        </section>
    </main>
</template>
<script>
import Nav from '../components/Nav.vue'
export default {
  components: { Nav },
    name: 'OrderDone',
}
</script>
<style lang="scss" scoped>
.grid-container{
  .img {
        background: url('../assets/skate-hero-1.jpg');
        background-size: cover;
        background-position: center;
        height: 30rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 2rem rgba(0,0,0,.2);
        width:auto;
        h1 {
            font-size: 3rem;
            color: white;
            text-shadow: 0 0 1rem rgba(0,0,0,1);
        }
    }
.text-first{
  margin-top: 1rem;
  text-align: left;
}
.column{
  font-weight: bold;
  color: rgb(122, 122, 122);
  float: left;
  font-size: 22px;
  text-align: left;
  margin-top: 1rem;
}
.btn{
     cursor: pointer;  
      display: flex;
      flex-direction: row;
      align-items: center;
        color: white;
        height: 40px;
        width: 150px;
        font-size: 18px;
}
}
</style>