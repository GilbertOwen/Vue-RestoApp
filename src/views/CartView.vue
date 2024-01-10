<template>
  <Navbar />
  <div class="orders-list" v-if="mobile && cart">
    <h1>Cart</h1>
    <form class="order" v-on:submit.prevent v-if="cart.length">
      <div class="order-body">
        <h1 style="margin-bottom: 10px; text-align: center">Payment</h1>
        <h3 style="color: #53917e; font-size: 25px; margin-bottom: 10px">
          {{ "Rp. " + totalHarga }}
        </h3>
        <div class="input-group" style="margin-bottom: 10px">
          <label for="name">On Behalf of :</label>
          <input type="text" id="name" v-model="order.name" />
        </div>
        <div class="input-group">
          <label for="tableNumber">Table No. :</label>
          <input type="number" id="tableNumber" v-model="order.tableNo" />
        </div>
        <button type="submit" class="checkBtn" @click="checkOut">
          Check Out
        </button>
      </div>
    </form>
    <div class="order" v-for="(item, index) in cart" :key="item.id">
      <span style="text-align: center; background-color: #53917e">{{
        index + 1
      }}</span>
      <div class="order-img-top">
        <img :src="'../assets/food/' + item.product.gambar" alt="" />
      </div>
      <div class="order-body">
        <h1>{{ item.product.name }}</h1>
        <h4>Rp. {{ item.product.price }}</h4>
        <p>Detail : {{ item.detail }}</p>
        <p>Amount : {{ item.amount }}</p>
        <p style="margin-top: 5px">
          Total : Rp. {{ item.amount * item.product.price }}
        </p>
        <form v-on:submit.prevent class="action-btn">
          <button class="delete-btn" @click="deleteOrder(item.id)">
            Delete
          </button>
        </form>
      </div>
    </div>
  </div>
  <table class="orders" v-else-if="!mobile && cart">
    <thead class="infoTitle">
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Food</th>
        <th>Detail</th>
        <th>Amount</th>
        <th>Price</th>
        <th>Actions</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr class="alert" v-for="(item, index) in cart" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td><img :src="'../assets/food/' + item.product.gambar" alt="" /></td>
        <td style="text-transform: capitalize">{{ item.product.name }}</td>
        <td>{{ item.detail }}</td>
        <td>{{ item.amount }}</td>
        <td>Rp. {{ item.product.price }}</td>
        <td>
          <form class="action-btn">
            <button class="delete-btn" @click="deleteOrder(item.id)">
              Delete
            </button>
            <!-- <router-link :to="{ name:'foodDetail', params:{ id: ''} }" class="edit-btn">Edit</router-link> -->
          </form>
        </td>
        <td>Rp. {{ item.amount * item.product.price }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Total :</td>
        <td>{{ totalHarga }}</td>
      </tr>
    </tbody>
  </table>
  <div class="checkOut-container">
    <form class="checkOut" v-on:submit.prevent v-if="cart.length && !mobile">
          <h1 style=" color: #53917e;margin-bottom: 10px; text-align: right">Payment</h1>
          <h3 style="color: #53917e; font-size: 25px; margin-bottom: 10px">
            {{ "Rp. " + totalHarga }}
          </h3>
          <div class="input-group" style="margin-bottom: 10px">
            <label for="name">On Behalf of :</label>
            <input type="text" id="name" v-model="order.name" />
          </div>
          <div class="input-group">
            <label for="tableNumber">Table No. :</label>
            <input type="number" id="tableNumber" v-model="order.tableNo" />
          </div>
          <button type="submit" class="checkBtn" @click="checkOut">
            Check Out
          </button>
      </form>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
      order: {},
      mobile: false,
      total: 0,
      showModal: false
    };
  },
  components: {
    Navbar,
  },
  methods: {
    onResize() {
      if (window.innerWidth < 730) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    deleteOrder(id) {
      axios
        .delete("http://localhost:3000/carts/" + id)
        .then((res) => {
          console.log("Data berhasil dihapus");
          this.getOrder();
        })
        .catch((err) => console.log(err));
    },
    getOrder() {
      axios
        .get("http://localhost:3000/carts")
        .then((res) => {
          const data = res.data;
          this.cart = data;
        })
        .catch((err) => console.log(err));
    },
    checkOut() {
      if (this.order.name && this.order.tableNo) {
        this.order.cart = this.cart;
        axios.post("http://localhost:3000/orders", this.order)
          .then(() => {
            this.cart.map(function (item) {
              return axios.delete("http://localhost:3000/carts/" + item.id)
                          .catch(err => console.log(err));
            });


            this.$router.push({
              name: "success"
            });
          })
          .catch((err) => console.log(err));
      }
    },
  },
  mounted() {
    this.getOrder();
    if (window.innerWidth < 730) {
      this.mobile = true;
    }
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    totalHarga() {
      return this.cart.reduce((item, order) => {
        return (item += order.amount * order.product.price);
      }, 0);
    },
  },
};
</script>

<style scoped>
/* For Desktop or ipad or tablets */

.modal{
  width: 300px;
  height: 200px;
  background: rgba(172,255,47, 0.5);
  border-radius: 15px;
  color: #53917e;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -150px;
  padding: 20px;
  text-align: center;
  font-size: 14px;
}
.orders {
  width: 80%;
  margin: 30px auto;
  border-collapse: collapse;
}
.orders tbody .alert {
  border: 1px solid transparent;
  background-color: white;
}
.orders .infoTitle tr {
  background-color: #36304a;
  height: 60px;
}
.orders .infoTitle tr th {
  padding: 5px 20px;
  text-align: center;
  color: white;
  font-weight: unset;
}
.orders tbody tr td {
  text-align: center;
  padding: 10px;
}
.orders tbody td img {
  width: 100px;
  height: 60px;
  border-radius: 10px;
}
.orders .action-btn {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.orders .action-btn button {
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
}
.orders .action-btn .delete-btn {
  background-color: lightcoral;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
}
.orders .action-btn .edit-btn {
  background-color: yellow;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.checkOut-container{
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px auto;
}
.checkOut-container .checkOut{
  width: 20%;
  text-align: right;
}
.checkOut-container .checkOut .input-group input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding: 5px 10px;
  font-size: 15px;
}
.checkOut-container .checkOut .checkBtn {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: greenyellow;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

/* For Mobile */
.orders-list {
  width: 90%;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  gap: 20px;
}
.orders-list h1 {
  text-align: center;
  color: #53917e;
}
.order {
  width: 100%;
  background-color: white;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 30px 30px -25px rgba(#4133b7, 0.25);
}
.order .order-body h1 {
  text-align: left;
  font-size: 20px;
  text-transform: capitalize;
}
.order .order-img-top {
  /* width: 100%;
    height: 100%; */
  flex: 1;
}
.order .order-img-top img {
  display: block;
  width: 100%;
  height: 100%;
  /* max-width: 100%;
    max-height: 100%; */
  /* object-fit: cover; */
}
.order .order-body {
  padding: 12px;
}
.order .order-body p {
  font-size: 13px;
}
.order .order-body h4 {
  font-size: 15px;
  color: #53917e;
  margin-bottom: 5px;
}
.order .order-body .action-btn {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}
.order .order-body .action-btn .delete-btn {
  background-color: lightcoral;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
}
.order .order-body .input-group {
  width: 60%;
  margin: 0px auto;
}
.order .order-body .checkBtn {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: greenyellow;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
form .order-body h1,
form .order-body {
  text-align: center;
}
.order .order-body .input-group input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding: 5px 10px;
  font-size: 15px;
}

@media (max-width: 730px) {
  .orders {
  }
}
</style>