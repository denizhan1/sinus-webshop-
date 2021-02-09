<template>
  <div class="wrapper">
      <p>no cart item</p>
      <ul>
            <li>
                 <section>
                    <img src="" alt="" class="cart-img"> 
                 </section>
                 <section>
                     <h1>title</h1>
                     <p>product desc</p>
                     <p>serial</p>
                 </section>
            </li> 
      </ul>
      <div class="total-price">
          <h2>Total:</h2>
          <h2>2000</h2>

      </div>


  </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style lang="scss" scoped>
li{
    background-color: whitesmoke;
    margin: 5px;
    border-radius: 15px;
    padding: 0.5rem;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;

}
li:hover{
    border: 1px solid grey;
}
.cart-img{
    height: 3rem;
    align-self: flex-start;
}
.total-price{
    display: flex;
    justify-content: space-between;
}
</style>