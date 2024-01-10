<template>
  <div class="container">
    <div class="success-image">
      <img src="../assets/Firework.svg" alt="Successful image">
    </div>
    <div class="content">
      <h1>YEAY!!</h1>
      <h2>Your Order Has Been Added</h2>
      <h3>Please Wait</h3>
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
  .container .success-image{
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

  @media (max-width: 770px){
    .container {
      flex-direction: column;
    }
    .container .content{
      align-items: center;
    }
    .container .success-image{
      align-items: flex-end;
    }
  }
</style>