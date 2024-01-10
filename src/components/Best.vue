<template>

  <div class="best">
    <div class="action-group" v-if="windowSize < 714">
        <button class="action-btn" @click="changeProduct(-1)">
          <i class="fa fa-arrow-left"></i>
        </button>
        <button class="action-btn" @click="changeProduct(1)">
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    <div class="best-products" v-if="bestFoods.length && windowSize >= 714">
      <Card
      v-for="bestFood in bestFoods"
      :key="bestFood.id"
      :name="bestFood.name"
      :price="bestFood.price"
      :id="bestFood.id"
      :source="bestFood.gambar"
      />
    </div>
    <div class="best-products" v-else-if="bestFoods.length && windowSize < 714">
      <Card
        :name="bestFoods[product].name"
        :price="bestFoods[product].price"
        :id="bestFoods[product].id"
        :source="bestFoods[product].gambar"
      />
    </div>
    <div v-else>Loading for the best foods</div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";
export default {
  props: [],
  data() {
    return {
      product: 0,
      bestFoods: [],
      windowSize: window.innerWidth,
    };
  },
  components: {
    Card,
  },
  methods: {
    changeProduct(way) {
      if (this.product + way < 5) {
        if (this.product + way < 0) {
          this.product = 4;
        } else {
          this.product += way;
        }
      } else {
        this.product = 0;
      }

    },
    onResize(){
      this.windowSize = window.innerWidth;
    }
  },
  mounted() {
    const getData = async () => {
      const data = await axios.get("http://localhost:3000/best-products");
      this.bestFoods = data.data;
      console.log(this.bestFoods)
    };
    getData();
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style>
.best {
  margin-top: 40px;
  margin-bottom: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background-color: #53917e;
  padding: 50px 0px;
  align-items: center;
}
.best .best-products .best-card {
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
}
.best .best-products .best-card:hover{
  transform: scale(1.1);
}

.best-products {
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.action-group{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.action-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: #53917e;
}

@media (max-width: 680px){
  .best-products .best-card{
    width: 330px;
    height: 440px;
  }
  .best-products .best-card .card-body p{
    font-size: 16px;
  }
  .best-products {
  }
}
</style>