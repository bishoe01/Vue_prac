<template>
<div class="filter-item" :class="Filter" :style="{backgroundImage : `url(${previewFilter})`}">
</div>
</template>

<script>
export default {
    name:'TheFilterBox',
    props:{
        previewFilter: String,
        Filter : String,
    }
}
</script>

<style>
.filter-item {
width:100px;
height:100px;
margin:10px 10px 10px auto;
padding:8px;
display:inline-block;
color:white;
background-size:cover;
background-position:center;
}
</style>