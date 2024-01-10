<template>
  <nav>
    <ul class="history">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      /
      <li><router-link :to="{ name: 'foods' }">Foods</router-link></li>
      /
      <li>Order</li>
    </ul>
  </nav>
  <div class="container">
    <div :class="{errorModal : !success, successModal : success}" ref="modal">
        <h2 v-if="!success">You need to add some data !</h2>
        <h2 v-else>Order has been successfuly added</h2>
    </div>
    <div class="order" v-if="foodDetail">
      <div class="photo">
        <img :src="'../assets/food/' + foodDetail.gambar" alt="" />
      </div>
      <div class="content">
        <h2>{{ foodDetail.name }}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          facere molestiae ipsam fugit ex veniam qui, inventore libero
          voluptatum soluta porro vel eius!
        </p>
        <h3>
          <strong>Rp. {{ foodDetail.price }}</strong>
        </h3>
        <form action="" v-on:submit.prevent>
          <div class="input-group">
            <label for="itemAmount">Amount :</label>
            <input type="number" id="itemAmount" placeholder="Amount of item" v-model="item.amount"/>
          </div>
          <div class="input-group">
            <label for="itemDetail">Item Detail :</label>
            <textarea id="itemDetail" placeholder="Details like with sauce, don't add spice, etc.." v-model="item.detail"></textarea>
          </div>
          <button type="submit" class="orderBtn" @click="ordering">Order <i class="fa fa-shopping-cart"></i></button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      foodDetail: null,
        success:false,
      item:{}
    };
  },
  mounted() {
    const getFood = async () => {
      const res = await axios.get(
        "http://localhost:3000/products?id=" + this.id
      );
      const data = res.data[0];
      this.foodDetail = data;
    };
    getFood();
  },
  methods:{
    ordering(){
        if(this.item.amount){
                const addToCart = () => {
                    axios.post(
                        "http://localhost:3000/carts"
                    , this.item)
                    .then(this.$router.push({name : 'cart', params: {message : "The item has been succesfully added to cart"}}))
                    .catch(err => console.log(err));
                };
                this.item.product = this.foodDetail;
                addToCart();
                // this.success = true;
                // this.$refs.modal.style.display = 'block';
                // setTimeout(() => {
                //     this.$refs.modal.style.display = 'none';
                //     this.success = !this.success;
                // }, 3500)
        }else{
            this.$refs.modal.style.display = 'block';
            setTimeout(() => {
                this.$refs.modal.style.display = 'none';
            }, 3500)
            return;
        }
    }
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  margin: 0px auto 80px;
  width: 84%;
  height: 100%;
  position: relative;
  padding: 0px 0px 50px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
}
nav .history {
  display: flex;
  flex-direction: row;
}
nav .history li {
  margin: 0px 15px;
  list-style: none;
}
nav .history a {
  text-decoration: none;
  color: black;
  font-size: 15px;
  font-weight: 600;
}
.order {
  min-height: 150px;
  max-height: 450px;
  width: 70%;
  margin: 120px auto 100px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
}
.order .content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 30px;
  text-align: right;
}
.order .content h2 {
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 10px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.7);
}
.order .content p {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.5;
  margin-bottom: 20px;
}
.order .content h3 {
    font-size: 25px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.order .photo {
  flex-basis: 50%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0)
  );
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.order .photo img {
  display: block;
  height: 100%;
  width: 100%;
}
.container form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.container form .input-group{
    flex-basis: 30%;
}
.container .input-group label{
    margin-bottom: 10px;
}
.container .input-group input, .container .input-group textarea {
    width: 100%;
  padding: 5px 10px;
  margin-top: 5px;
  font-size: 16px;
}
.container form .orderBtn{
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 700;
    background-color: #53917e;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
.errorModal{
    display: none;
    position: absolute;
    left: 37%;
    top: 30px;
    z-index: 10;
    background-color: lightcoral;
    min-width: 150px;
    max-width: 300px;
    min-height: 100px;
    max-height: 250px;
    opacity: 0.8;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    border: 1px solid red;
}
.successModal{
    display: none;
    position: absolute;
    left: 37%;
    top: 30px;
    z-index: 10;
    background-color: lightgreen;
    min-width: 150px;
    max-width: 300px;
    min-height: 100px;
    max-height: 250px;
    opacity: 0.8;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    border: 1px solid green;
}
/* .input-group{
    height: fit-content;
}
.input-group textarea{
    height: 100%;
} */
@media (max-width: 1100px) {

  .order {
    width: 70%;
    flex-direction: column;
    max-height: 700px;
  }
  .order .content {
    text-align: center;
    padding: 0;
  }
  .order .photo img {
    max-width: 100%;
    object-position: center;
    object-fit: cover;
  }
}
@media (max-width: 900px){
    .container{
        width: 100%;
    }
}
</style>