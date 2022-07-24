<template>

  <div>
    <h4>{{BlogWriting[$route.params.id].title}}</h4>
    <h5>{{BlogWriting[$route.params.id].content}}</h5>
    <p>{{BlogWriting[$route.params.id].title}}</p>
  </div>
    <router-view></router-view>
</template>

<script>
export default {
 name:"TheDetail",
 props:{
        BlogWriting : Object,
    }
}
</script>

<style>

</style>