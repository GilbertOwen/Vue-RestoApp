<template>
  <div :class="{'best-card' : this.$route.name === 'home', card : this.$route.name === 'foods'}">
        <div class="card-img-top">
            <img :src="'../assets/food/' + source" :alt="name">
        </div>
        <div class="card-body">
            <h2>{{ name }}</h2>
            <h4><strong>Rp. {{ price }}</strong></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, accusamus.</p>
        </div>
        <router-link class="buy-btn" :to="{ name: 'food', params : {id : id}}">Order</router-link>
    </div>
</template>

<script>
export default {
    props:['name', 'price', 'id', 'source'],
    data(){
        return {

        }
    },
}
</script>

<style>
    .card{
        background: white;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        overflow: hidden;
        transition: 0.4s ease-in;
        color: #53917e;
        border: 2px solid #e7e7e7;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
    .best-card{
        width: 250px;
        height: 360px;
        background: white;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        overflow: hidden;
        transition: 0.4s ease-in;
        border: 1px solid rgba(0,0,0,0.5);
        color: #53917e;
    }
    .best-card .buy-btn, .card .buy-btn{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 10px 15px;
        border-radius: 5px;
        border:none;
        background-color: #5cb85c;
        cursor: pointer;
        flex-basis: 10%;
        align-items: center;
        font-size: 16px;
        color: black;
        font-weight: bold;
        text-decoration: none;
    }
    .best-card .card-img-top, .card .card-img-top{
        flex-basis:50%;
        object-fit: cover;
        object-position: center;
    }
    .best-card .card-img-top img,  .card .card-img-top img{
        max-width: 100%;
        max-height: 100%;
    }
    .best-card .card-body, .card .card-body{
        flex-basis:40%;
        padding: 0px 10px 10px;
    }
    .best-card .card-body h2, .card .card-body h2{
        margin-bottom: 10px;
        text-transform: capitalize;
    } 
    .best-card .card-body h4 , .card .card-body h4{
        margin-bottom: 10px;
    }
    .best-card .card-body p{
        font-size:13px;
    }
</style>