<template>
   <div class="black-bg" v-if="isModal">
    <div class="white-bg">
        <img :src="oneroom[clickindex].image" alt="">
      <h4>{{oneroom[clickindex].title}}</h4>
      <p>{{oneroom[clickindex].content}}</p>
      <select v-model.number="month">
      <option>6</option>
      <option>12</option>
      <option>18</option>
      <option>24</option>
      </select><span>개월</span>
      
      <p>{{month}}개월 : {{oneroom[clickindex].price * month}}만원</p>
      
      
      <button @click="$emit('closeModal')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TheModal',
    data() {
        return {
            month : 1,
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

</style>