<template>
 
 <transition name="fade">
  <TheModal @closeModal="isModal=false" :oneroom="oneroom" :clickindex="clickindex" :isModal="isModal"/>
</transition>

  <div class= "menu">
    <a v-for="(nav,i) in menus" :key="i">{{menus[i]}}</a>
  </div>
  
  <TheDiscount v-if="showDiscount == true" :discount_=discount_ />

  <button @click="priceSort">가격 높은순</button>
  <button @click="priceSort_reverse">가격 낮은순</button>
  <button @click="backSort">원래대로</button>
  <TheCard @openModal="isModal=true; clickindex=$event" :oneroom="oneroom[i]" v-for="(a,i) in oneroom" :key="i"/>

    
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
      Object_ : {name : "kim", age: 20},
      clickindex : 0,
      isModal : false,
      cnt :  [0,0,0],
      price : [40,70,80],
      products : ['역삼','천호','마포구'],
      menus : ["Home", "Shop", "About"],
      room_image : ["./assets/room0.jpg","./assets/room1.jpg","./assets/room2.jpg"],
      oneroom_original : [...apple],
      oneroom : apple,
      Sorting : null,
      showDiscount : true,
      discount_ : 3,
    }
  },
  methods: {
    increase(i){
      this.cnt[i]++;
    },
    priceSort(){
      this.oneroom.sort(function(a,b){
        return  b.price - a.price;
      })
    },
    priceSort_reverse(){
      this.oneroom.sort(function(a,b){
        return  a.price - b.price;
      })
    },
    backSort(){
      this.oneroom = [...this.oneroom_original];
    }
  },
  
  mounted(){
    setInterval(() => {
      if(this.discount_ ==0){
        this.showDiscount = false;
      }
      this.discount_-=1;
      
    }, 1000);
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

.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 0.5s;
}
.fade-leave-to{
  opacity: 0;
}

.fade-enter-from{
  transform: translateY(-1000px);
}
.fade-enter-active{
  transition: all 0.5s;
}
.fade-enter-to{
  transform: translateY(0px);
}


</style>
