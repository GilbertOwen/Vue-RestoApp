<template>
  <Navbar />
  <div class="container">
    <Hero />
    <h1 id="bestTitle">Best Products</h1>
    <Best />
    <Category />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Best from '@/components/Best.vue';
import Footer from '@/components/Footer.vue';
import Category from '@/components/Category.vue';

export default {
  components: {
    Navbar, Hero, Best, FooterComp : Footer, Category
  },
  data(){
    return{
      bestProducts:[]
    }
  },
  
}
</script>

<style scoped>
.container{
    background-color: white;
    margin: 0px auto 30px;
    width: 84%;
    height: 100%;
    position: relative;
    padding: 0px 0px 50px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

#bestTitle{
  width: fit-content;
  margin: 100px auto 0px;
  letter-spacing: 2px;
  font-size: 48px;
  color: rgb(122, 255, 122);
}

@media (max-width: 760px){
  .container{
    width: 100%;
  }
}
@media (max-width: 690px){
  #bestTitle{
    font-size: 38px;
  }
}

</style>