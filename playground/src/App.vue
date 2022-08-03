<template>
<div>
{{TheMovie[0].title}}
<TheCard/>
<button type="button" class="btn btn-primary">Primary</button>
</div>
</template>

<script>
import TheMovie from './assets/moviedata.js';
import TheCard from './components/Card.vue';
export default {
  name: 'App',
  data() {
    return {
      TheMovie,
    }
  },
  components: {
    TheCard,
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
  margin-top: 60px;
}
</style>
