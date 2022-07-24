<template>
  <div>
    <img :src="oneroom.image" class="room-img">
      <h4 @click="$emit('openModal',oneroom.id)">{{oneroom.title}}</h4>
      <p>{{oneroom.content}}</p>
      <p>{{oneroom.price}}Won</p>
    </div>
</template>

<script>
export default {
  name : "TheCard",
  props:{
        oneroom : Object,
        isModal : Boolean,
        clickindex : Number,
    }
}
</script>

<style>

</style>