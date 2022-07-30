<template>
<div @click="fire" class="filter-item" :class="Filter" :style="{backgroundImage : `url(${previewFilter})`}">
    <slot></slot>
    
</div>
</template>

<script>
export default {
    name:'TheFilterBox',
    props:{
        previewFilter: String,
        Filter : String,
    },
    data() {
        return {
            msg : 'Hello',
        }
    },
    methods: {
        fire(){
            this.emitter.emit('Filter_click',this.Filter);
        }
    },
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