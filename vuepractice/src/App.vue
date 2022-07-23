<template>


 
  <TheModal :oneroom="oneroom" :clickindex="clickindex" :isModal="isModal"/>

  <div class= "menu">
    <a v-for="(nav,i) in menus" :key="i">{{menus[i]}}</a>
  </div>
  <TheCard :oneroom="oneroom" :clickindex="clickindex" :isModal="isModal"/>
  <TheDiscount></TheDiscount>
  
  

    
</template>

<script>
import apple from "./oneroom.js";
import TheDiscount from "./Discount.vue";
import TheModal from "./Modal.vue";
import TheCard from "./Card.vue";
export default {
  name: 'App',
  data(){
    return{
      clickindex : 0,
      isModal : false,
      cnt :  [0,0,0],
      price : [40,70,80],
      products : ['역삼','천호','마포구'],
      menus : ["Home", "Shop", "About"],
      room_image : ["./assets/room0.jpg","./assets/room1.jpg","./assets/room2.jpg"],
      oneroom : apple,
    }
  },
  methods: {
    increase(i){
      this.cnt[i]++;
    },
  },
  components: {
    TheDiscount,
    TheModal,
    TheCard,
}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
.room-img{
  width: 100%;
  margin-top: 40px;
  }
.white-bg{
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}


</style>
