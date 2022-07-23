<template>
  <div v-for="(a,i) in oneroom" :key="i">
    <img :src="a.image" class="room-img">
      <h4><span>{{a.id+1}}</span>  {{a.title}}</h4>
      <p>{{a.content}}</p>
      <p>{{a.price}}만원</p>
    </div>
</template>

<script>
export default {
  name : "TheCard",
  props:{
        oneroom : Array,
        isModal : Boolean,
        clickindex : Number,
    }
}
</script>

<style>

</style>