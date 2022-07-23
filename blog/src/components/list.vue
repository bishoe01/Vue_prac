<template>
  <div class="list_writing">
    <h4>{{BlogWriting.title}}</h4>
    <h5>{{BlogWriting.content}}</h5>
    <p>{{BlogWriting.date}}</p>
  </div>
</template>

<script>
export default {
    name: "TimeLine",
    data() {
        return {
            // BlogWriting : 
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