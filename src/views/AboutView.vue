<template>
    <div class="about-us">
      <Navbar/>
      <div class="container">
        <h1>About Us</h1>
        <div class="about">
          <div class="content">
            <h2>CraFood</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore facere molestiae ipsam fugit ex veniam qui, inventore libero voluptatum soluta porro vel eius! </p>
          </div>
          <div class="photo">
            <img src="../assets/home-photo.jpg" alt="">
          </div>
        </div>
        <h1>Why Choose Us</h1>
        <div class="benefits">
          <div class="benefit">
            
          </div>
          <div class="benefit">
            
          </div>
          <div class="benefit">
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'HomeView',
    components: {
      Navbar
    }
  }
  </script>
  
  <style scoped>
  .container{
    background-color: white;
    margin: 0px auto;
    padding: 20px 10px;
    width: 84%;
    height: 100%;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .container h1{
    font-size: 42px;
    color: #53917e;
  }
  
  /* About */
  
  .about{
    min-height: 150px;
    max-height: 450px;
    width: 60%;
    margin: 50px auto 100px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
  }
  .about .content{
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 20px;
    justify-content: center;
  }
  .about .content h2{
    font-size: 40px;
    color: rgba(0,0,0,0.7);
  }
  .about .content p{
    font-size: 15px;
    color: rgba(0,0,0,0.5);
    line-height: 1.5;
  }
  .about .photo{
    flex:1;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
    background-image: linear-gradient(
      to top,
      rgba(0,0,0,0.4),
      rgba(0,0,0,0)
    );
  }
  .about .photo img{
    max-width: 100%;
    max-height: 100%;
    min-height: 100%;
    min-width: 100%;
    object-position: center;
    object-fit: cover;
  }
  
  /* Benefits */
  
  .benefits{
    text-align: center;
  }
  
  @media (max-width: 850px){
    .container h1{
      font-size: 35px;
    }
  
    /* About */
  
    .about .content{
      padding: 0;
    }
    .about .content h2{
      font-size:30px;
      text-align:center;
      margin-bottom: 10px;
    }
    .about .content p{
      text-align:center;
      margin-bottom: 10px;
    }
    .about{
      max-height: 600px;
      width: 90%;
      flex-direction: column;
    }
    .about .photo{
      border:none;
    }
    .about .photo img{
      margin-left: 0px;
    }
  
    /* Benefits */
    
  }


  @media (max-width: 478px){
    .container h1{
      font-size: 30px;
    }
  }
  </style>