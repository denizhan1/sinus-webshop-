<template>
  <div class="register">
    <div class="register-sub">
    <Nav />
    <div class="skate-img"></div>
    <div class="under">
      <div class="text">
        <h3>Cowabunga</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga quasi nam, expedita architecto dolor est magni sequi doloribus dignissimos autem laboriosam corrupti, corporis voluptatem possimus ea quos fugiat quidem.</p><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga quasi nam, expedita architecto dolor est magni sequi doloribus dignissimos autem laboriosam corrupti, corporis voluptatem possimus ea quos fugiat quidem.</p>
      </div>
      <form>
        <h3>Register</h3>
        <label for="fname">Name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Email:</label><br>
        <input type="text" id="lname" name="lname">
        <label for="lname">Password:</label><br>
        <input type="text" id="lname" name="lname">
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
.register {
  display: flex;
  justify-content: center;
  width: 100%;
}
.register-sub {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-around;
}
.skate-img {
  width: 100%;
  height: 500px;
  background-image: url("~@/assets/skate-hero-1.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.under {
  display: flex;
}

</style>
