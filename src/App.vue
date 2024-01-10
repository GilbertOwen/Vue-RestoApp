<template>
  <router-view/>
  <FooterComp />
</template>

<script>
import Footer from '@/components/Footer.vue'
  export default{
    components:{
      FooterComp : Footer
    }
  }
</script>

<style>
  #app{
    min-width: 100%;
    min-height: 100%;
    position: relative;
    padding-bottom: 100px;
  }
</style>