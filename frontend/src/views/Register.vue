<template>
  
    <main id="register" class="grid-container">
      <Nav />
        <section class="hero col-6">
            <h1>Join the rolling family!</h1>
        </section>
        <section class="text-side">
            <h1 class="text-side">Cowabunga</h1>
            <p class="first-column">Skate ipsum dolor sit amet, rip grip hip grab 540 pivot nose Tracker. Gnar bucket Skateboard Shuffle casper slide 180 boneless layback hardware nosebone.</p>
              <br>
            <p class="seccond-column">Vans Calfornia Daze rock and roll chicken wing pogo transfer. Powerslide pivot slam Sidewalk Surfer durometer. Deck full-cab gap Old Ghosts ho-ho. Invert melancholy feeble rocket air. Hanger rock and roll g-turn ledge. 50-50 Kevin Harris boardslide street Mark Gonzales. Air pool hang-up fakie out Randy Ruiz. Steps nose bump powerslide axle set. Future Primitive Japan air snake steps camel back. Face plant crailtap rail slide half-cab. Rail regular footed flypaper drop in. Casper slide speed wobbles indy grab ollie hole. </p>
        </section>
        <section class="reg-side">
         <h1 class="reg-side">Register</h1>
        <form class="reg-side">
            <label >
                Name
                <input type="text" v-model="user.name" />
            </label>
            <label class="col-4">
                Email
                <input type="email" v-model="user.email" />
            </label>
            <label class="col-4">
                Password
                <input type="password" v-model="user.password" />
            </label>
            <label class="col-4">
                repeatPassword
                <input type="password" v-model="user.repeatPassword" />
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
            
            <footer class="col-4">
                <a type="button" href="#" class="btn" @click=" sendRegistration">Register!</a>
            </footer>
         </form>
         </section>
    </main>
</template>
<script>
import Nav from '../components/Nav.vue'
export default {
  components: { Nav },
    name: 'Register',

      data:()=>({
        user:{
            name:'',
            email:'',
            password:'',
            adress:{
            street:'',
            zipcode:'',
            city:'',
            cardOwner:'',
            cardNumber:'',
            validUntil:'',
            cvv:''
          }

        } 
  }),
      
      methods:{
        
       async  sendRegistration()
       {
         await this.$store.dispatch('registerToSinus',this.user)
        //  this.$router.push('/products')

        }
      }
 
}
</script>
<style lang="scss">
#register {
    padding: 0 0 3rem 0;
    cursor: pointer;

    .hero {
        background: url('../assets/skate-hero-1.jpg');
        background-size: cover;
        background-position: center;
        height: 30rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 2rem rgba(0,0,0,.2);

        h1 {
            font-size: 3rem;
            color: white;
            text-shadow: 0 0 1rem rgba(0,0,0,1);
        }
    }
}
.grid-container{
  
  margin-left: 20rem;
  padding-left: 20rem;
  grid-column: auto/span 6;
  width: 80rem;
  
}
.reg-side{
  width: 50%;
  display: flex;
  justify-content:flex-end;
  flex-direction: column;
  //align-items: flex-end;
  margin-left: 5rem;
  margin-top: 2rem;
  text-align: left;
  
}
.text-side {
 
  margin-top: 2rem;
  width: 50%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content:center;
 
  float: left;
  text-align: left;
}
.first-column{
  font-weight: bold;
  float: left;
}
p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
form label input, form label textarea {
    border: 1px solid rgba(0,0,0,.6);
    font-size: 1.2rem;
    resize: none;
  
    appearance: none;
    background: none;
    padding: .5rem;
    width: 100%;
   
    box-sizing: border-box;
    border-radius: .25rem;
 }
.btn {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: .75rem 1.5rem;
    font-size: 1rem;
    text-decoration: none;
    color: #eee;
    border-radius: .25rem;
    background: rgba(0,0,0,.8);
    float: left;
    margin-top: 1rem;
}

label{
  font-size: 0.8rem;
  color: rgba(99, 98, 98, 0.6);  
  margin-top: 4px;
}



</style>