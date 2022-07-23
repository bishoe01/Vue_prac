<template>
   <div class="black-bg" v-if="isModal">
    <div class="white-bg">
      <h4>{{oneroom[clickindex].title}}</h4>
      <p>{{oneroom[clickindex].content}}</p>
      <p>{{oneroom[clickindex].price}}만원</p>
      <img :src="oneroom[clickindex].image" alt="">
      <TheDiscount/>
      <!-- <button v-on:click="isModal=}">Close</button> -->
    </div>
  </div>
</template>

<script>

export default {
    name: 'TheModal',
    props:{
        oneroom : Array,
        isModal : Boolean,
        clickindex : Number,
    }
}
</script>

<style>

</style>