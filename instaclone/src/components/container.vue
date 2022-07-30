<template>
  <div>
  <div v-if="step==0">
  <ThePost :TimeLineData='TimeLineData[i]' v-for="(a,i) in TimeLineData" :key="i"/>
  </div>
  
  
  <div v-if="step==1">
    <div class="upload-image" :style="{backgroundImage : `url(${imgurl})`}"></div>
    <div class="filters">
      <FilterBox v-for="(a,i) in FilterCategory" :key="i" :previewFilter="imgurl" :Filter="a"/>
    </div>
  </div>
  <div v-if="step==2">
    <div class="upload-image" :style="{backgroundImage : `url(${imgurl})`}"></div>
    <div class="write">
    <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
    </div>
  </div>
</div>

</template>

<script>
import ThePost from './post.vue'
import FilterBox from './FilterBox.vue'
import FilterCategory from '@/FilterCategory'
export default {
    name: "TheContainer",
    components: {
    ThePost,
    FilterBox,
},
    props:{
      TimeLineData : Object,
      step: Number,
      imgurl: String,
    },
    data() {
      return {
        FilterCategory,
      }
    },
}
</script>

<style>
.upload-image{
width:100%;
height:450px;
background:cornflowerblue;
background-size:cover;
}
.filters{
overflow-x:scroll;
white-space:nowrap;
}
.filter-1{
width:100px;
height:100px;
background-color: cornflowerblue;
margin:10px 10px 10px auto;
padding:8px;
display:inline-block;
color:white;
background-size: cover;
}
.filters::-webkit-scrollbar{
height: 5px;
}
.filters::-webkit-scrollbar-track{
background:#f1f1f1;
}
.filters::-webkit-scrollbar-thumb{
background:#888;
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover{
background:#555;
}
.write-box{
border:none;
width:90%;
height:100px;
padding:15px;
margin:auto;
display:block;
outline:none;
}
</style>