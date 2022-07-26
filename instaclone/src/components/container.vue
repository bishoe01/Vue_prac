<template>
  <div>

  <ThePost :TimeLineData='TimeLineData[i]' v-for="(a,i) in TimeLineData" :key="i"/>
</div>

</template>

<script>
import ThePost from './post.vue'
export default {
    name: "TheContainer",
    components: {
      ThePost
    },
    props:{
      TimeLineData : Object
    }
}
</script>

<style>

</style>