<template>
   <div class="black-bg" v-if="isModal">
    <div class="white-bg">
        <img class="CardImg" :src="oneroom[clickindex].image">
      <h4>{{oneroom[clickindex].title}}</h4>
      <p>{{oneroom[clickindex].content}}</p>
      <select v-model.number="size">
      <option>255</option>
      <option>260</option>
      <option>275</option>
      <option>280</option>
      </select>
      
      <p>{{oneroom[clickindex].price}}Won</p>
      
      
      <button @click="$emit('closeModal')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TheModal',
    data() {
        return {
            size : 255,
        }
    },
    watch:{
        // month(a){
            // if(isNaN(a)){
            //     alert(`${a}는 숫자가 아닙니다.`)
            //     this.month = 1;
                
            // }
        // }
    },
    props:{
        oneroom : Array,
        isModal : Boolean,
        clickindex : Number,
    },
    components:{
    },
    beforeUpdate(){
        if(this.month == 12){
            alert(`${this.month}개월은 현재 대여가 불가능 합니다`)
        }
    },
}
</script>

<style>
.CardImg{
    width: 400px;
    height: 400px;
}
</style>