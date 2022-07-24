<template>
  <div>404PAGE</div>
  <p>{{$route.params.The404}}는 잘못된 URL정보입니다</p>
  <router-link to="/">홈페이지로 돌아가기</router-link>
</template>

<script>
export default {
    name:"The_404"
}
</script>

<style>

</style>