<template>
    <div class="container">
      <div class="notFound-image">
        <img src="../assets/not-found.svg" alt="404 - notFound image">
      </div>
      <div class="content">
        <h1>Page Not Found</h1>
        <h3>Sorry, the url that you're finding is not found</h3>
        <router-link class="homeBtn" :to="{ name: 'home' }">Back to Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }
    .container img{
      min-width: 300px;
      width: 500px;
      text-align: center;
    }
    .container .notFound-image{
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
    .container .content{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #53917e;
    }
    .container .content h1{
      font-size: 48px;
    }
    .container .content .homeBtn{
        margin-top: 15px;
        padding: 10px 15px;
        width: fit-content;
        background: lightgreen;
        text-decoration: none;
        color: #53917e;
        font-weight: 700;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.5);
    }
  
    @media (max-width: 770px){
      .container {
        flex-direction: column;
      }
      .container .content{
        align-items: center;
      }
      .container .content h1{
        text-align: center;
      }
      .container .notFound-image{
        align-items: flex-end;
      }
    }
  </style>