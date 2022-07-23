<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h4>REACT 개발자의 블로그입니다</h4>
    <p> VUE로 만들었음</p>
  </div>
  <TimeLine v-for="(a,i) in BlogWriting" :key="i-1" :BlogWriting="a"></TimeLine>
</template>

<script>
import BlogWriting from './assets/blog.js'
import TimeLine from "./components/list.vue"

export default {
  name: 'App',
  data() {
    return {
      BlogWriting,
    }
  },
  components: {
    TimeLine,
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
</style>
