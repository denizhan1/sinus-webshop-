<template>
  <div class="register">
    <div class="register-sub">
    <Nav />
    <div class="skate-img">
      <h2 class="img-text">Join the rolling family!</h2>
    </div>
    <div class="under">
      <div class="text">
        <h3 class="title-text">Cowabunga</h3>
        <p class="text-first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga quasi nam, expedita architecto dolor est magni sequi doloribus dignissimos autem laboriosam corrupti, corporis voluptatem possimus ea quos fugiat quidem.</p><br>
        <p class="text-seccond">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga quasi nam, expedita architecto dolor est magni sequi doloribus dignissimos autem laboriosam corrupti, corporis voluptatem possimus ea quos fugiat quidem.</p>
      </div>
      <form>
        <h3 class="reg-title">Register</h3>
        <label class="reg" for="fname">Name:</label><br>
        <input class="register-input" type="text" id="fname" name="fname"><br>
        <label class="reg" for="lname">Email:</label><br>
        <input class="register-input" type="text" id="lname" name="lname">
        <label class="reg" for="lname">Password:</label><br>
        <input class="register-input" type="text" id="lname" name="lname">
      </form>
    </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
// @ is an alias to /src
export default {
  name: 'Register',
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped>
*{
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  }
.register {
  display: flex;
  justify-content: center;
  width: 100%;
}
.register-sub {
  display: flex;
  flex-direction: column;
  width: 70%;
  
}
.skate-img {
  display: flex;
  width: 100%;
  height: 500px;
  background-image: url("~@/assets/skate-hero-1.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.under {
  display: flex;
}
.title-text{
  margin-bottom: 10px;
  display: flex;
  font-size: 17px;
  justify-items: flex-start;
}
.text-first{
  font-weight: bold;
  text-align: left;
  margin-right: 20px;
}
.text-seccond{
  text-align: left;
  margin-right: 20px;
}
.img-text{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  color: whitesmoke;
  font-size: 20px;
}
.reg{
  color: gray;
  margin-top: 5px;
  display: flex;
  justify-items: flex-start;
  float: left;
  font-size: 13px;
}
.register-input{
  float:left;
  font-size: 15px;
  text-align: center;
  height: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: background .4s;
}
.reg-title{
  text-align: left;
}
</style>