<template>
    <div class="login">
        <div id="login-inputs" >
            <label class="login-lable" for="userName"  >Email</label>
            <input class="login-input" type="email" required  placeholder=""  v-model="user.email">
            <label class="login-lable" for="password">Password</label>
            <input class="login-input" type="password"  required placeholder=""  v-model="user.password">
            <div class="btn-grupp">
              <button class="login-btn" @click="submitLogin">Login </button>
              <button class="login-btn" @click="registerMig">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'Login',
  data:()=>({
    showModal: false,
    user:{
      email:'',
      password:''
    }
  }),
  methods:{
     submitLogin(){
      console.log(this.user)
      if(this.user.email!="" && this.user.password !=""){
           this.$store.dispatch('loginUser',this.user);
           this.$router.push('/products')
      }
        else{
        alert('enter your email and password');
      }

    },
     registerMig(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
    margin-top: 5rem;
    margin-right: 5rem;
    position: absolute;
    top: 0;
    bottom: 0.1;
    left: 1;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    width: 300px;
    height: 210px;
    box-shadow: 7px 2px 8px rgba(0, 0, 0, 0.33);
    border-radius: 1rem;
   }
  .login-lable {
    display: flex;
    margin-left: 1.7rem;
    font-size: 13px;
   }
    input {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid rgba(92, 91, 91, 0.6);
      font-size: 1.2rem;
      resize: none;
      appearance: none;
      background: none;
      padding: .5rem;
      width: 80%;
      box-sizing: border-box;
      border-radius: .25rem;
      margin-top: 0.5rem;
      margin-left: 1.7rem;
}
.login-btn{
  background-color: black;
  border: none;
  color: white;
  border-radius: 0.25rem;
  height: 45px;
  width: 21%;
  margin-top: 0.5rem;
  cursor: pointer;

}
.btn-grupp{
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  margin-top: 4px;
  gap: 8px;
}
</style>