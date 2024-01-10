<template>
    <nav>
      <div class="web-logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <ul class="nav-links" ref="menuLinks">
        <li><router-link :disabled="this.$route.name === 'home'" :class="{active : this.$route.name === 'home'}" :to="{name:'home'}">Home</router-link></li>
        <li><router-link :disabled="this.$route.name === 'foods'" :class="{active : this.$route.name === 'foods'}" :to="{name:'foods'}">Foods</router-link></li>
        <li><router-link :disabled="this.$route.name === 'about'" :class="{active : this.$route.name === 'about'}" :to="{name:'about'}">About</router-link></li>
      </ul>
      <div class="cart" >
        <router-link :to="{ name:'cart' }">
          <span>Cart</span>
          <i class="fa-solid fa-cart-shopping fa-lg"></i>
          <span style="margin-left: 5px;">{{   quantity }}</span>
        </router-link>
      </div>
    </nav>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      quantity: 0,
      // showNav: false,
    }
  },
  methods :{
  },
  mounted(){
    const getCart = async () =>{
      try{
        const res = await axios.get("http://localhost:3000/carts");
        const cartQuantity = res.data.length;
        this.quantity = cartQuantity;
      }
      catch(error){
        console.log(error);
      }
    }
    getCart();
  }
}
</script>

<style>
  nav{
    padding: 15px 8%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    z-index: 10;
  }
  nav .nav-links{
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0px 0px 0px;
    transition: 0.4s;
  }
  nav .nav-links a{
    text-decoration: none;
    font-size: 25px;
    color: #53917e;
    padding: 10px;
    font-weight: 600;
  }
  nav .nav-links .active{
    opacity: 0.5;
  }
  nav .nav-links li{
    margin: 0px 10px;
    position: relative;
  }
  nav .nav-links li::after{
    content: '';
    position: absolute;
    transform: scaleX(0);
    bottom: 0;
    left: 0;
    background-color: #53917e;
    transform-origin: bottom right;
    color: black;
    width: 100%;
    height: 3px;
    transition: transform 0.2s ease-in-out;
  }
  nav .nav-links li:hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  nav .web-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  nav span{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 25px;
    color: black;
    font-weight: 300;
    letter-spacing: 2px;
    margin-right: 5px;
  }
  nav .web-logo img{
    width: 60px;
    filter: drop-shadow(5px 5px 10px lightgreen);
  }
  nav .cart a{
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  @media (max-width: 766px) {
    /* nav span{
      display: none;
    } */
  }
  @media(max-width: 650px){
    nav{
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }
</style>