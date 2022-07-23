<template>
  <div class="discount">
    <h4>지금 결제하면 {{discount_}}%할인</h4>
  </div>
</template>

<script>
export default {
    name : "TheDiscount",
    data() {
      return {

      }
    },
    props:{
      discount_ : Number
    },
    
}
</script>

<style>
</style>
