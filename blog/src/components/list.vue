<template>
  <div class="list_writing" v-for="(a,i) in BlogWriting" :key="i"> 
    <h4 @click="$router.push(`/detail/${i}`)">{{a.title}}</h4>
    <h5>{{a.content}}</h5>
    <p>{{a.date}}</p>
    
  </div>
</template>

<script>

export default {
    name: "TimeLine",
    data() {
        return {
        }
    },
    props:{
        BlogWriting : Object,
    }
}
</script>

<style>
.list_writing{
    padding: 20px;
    text-align: center;
}
</style>