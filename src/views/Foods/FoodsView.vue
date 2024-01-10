<template>
    <Navbar />
    <div class="container">
        <div class="title">
            List of <h1> Foods</h1>
        </div>
        <div class="input-group">
            <input @keydown="filteringFoods" type="text" v-model="searchFood" placeholder="Search for Name">
            <button><i class="fa fa-search"></i></button>
        </div>
        <!-- <ul v-if="foods.length">
            <li v-for="food in filteredFoods" :key="food.id">
                <h3 style="text-transform: capitalize;">{{ food.name }}</h3>
            </li>
        </ul> -->
        <!-- <ul v-if="foods.length">
            <li v-for="food in foods" :key="food.id">
                <h3 style="text-transform: capitalize;">{{ food.name }}</h3>
            </li>
        </ul> -->
        <div class="food-gallery" v-if="foods.length">
            <Card v-for="food in foods" :key="food.id" :id="food.id" :name="food.name" :price="food.price" :source="food.gambar"/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'
import axios from 'axios';
export default {
    name:'FoodsView',
    components:{
        Navbar, FooterComp : Footer, Card
    },
    data() {
        return{
           foods:[],
           searchFood: ''   
        }
    },
    mounted(){
        const getData = async () =>{
            const data = await axios.get('http://localhost:3000/products');
            this.foods = data.data;
        }
        getData();
    },
    methods :{
        async filteringFoods(){
            const data = await axios.get('http://localhost:3000/products?q=' + this.searchFood )
            this.foods = await data.data;
        }
    },
    computed: {
        //  filteredFoods(){ 
        //     return this.foods.filter(food => {
        //         console.log(this.searchFood);
        //         return food.name.includes(this.searchFood);
        //     });
        }
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
    display: flex;
    flex-direction: column;
}
.container .title{
    width: 100%;
    margin-left: 30px;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 35px;
    color: #53917e;
    line-height: 0.8;
}
.container .title h1{
}
.container .input-group{
    width: 30%;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    margin-left: 30px;
}
.container .input-group button{
    display: block;
    padding: 5px 10px;
    flex: 1;
    border:none;
    cursor: pointer;
}
.container .input-group input{
    padding: 5px 10px;
    font-size: 16px;
    flex: 4;
}
.container .food-gallery{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    padding: 20px 30px;
    grid-gap: 1rem;
}

@media (max-width: 1043px){
    .container .food-gallery{
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
}
</style>