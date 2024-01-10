<template>
  <div class="hero">
    <div class="content">
        <h1>Open Up for Order now</h1>
        <p>Discount up to 50% Till
        27 - 30 September
        </p>
        <router-link :to="{name: 'foods'}"><span>Foods</span> <i class="fa fa-arrow-right"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.hero{
    background-image: url('../assets/hero.jpg');
    display:flex;
    align-items: center;
    max-width: 100%;
    height: 600px;
    background-size: cover;
    background-position: bottom left;
    /* box-shadow: 0px 1px 5px black; */
}
.hero .content{
    margin-left: 90px;
    width: 50%;
}
.hero .content h1{
    font-size: 40px;
    color:white;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
}
.hero .content p{
    font-size: 18px;
    font-weight: 500;
    color: #53917e;
    margin-bottom: 20px;
}
.hero .content a{
    display: flex;
    width: fit-content;
    gap: 10px;
    box-shadow: -5px 5px 5px rgba(0,0,0,0.5);
    flex-direction: row;
    text-decoration: none;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 15px;
    background-color: lightyellow;
    border-radius: 15px;
    color: burlywood;
    transition: gap 0.5s ease-in-out;
}
.hero .content a:hover{
    gap: 40px;
    /* padding: 10px 30px 10px 15px; */
}

@media (max-width: 520px){
    .hero .content{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .content h1{

    }
}
</style>