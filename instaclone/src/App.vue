<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step++;">Next</li>
      <li v-if="step==2" @click="publish">Next</li>
    </ul>
  </div>

  <TheContainer  @write="content_writing = $event" :TimeLineData="TimeLineData" :step="step" :imgurl="imgurl">
  </TheContainer>

  <button @click="more">More</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>




</template>

<script>
import TimeLineData from "./data.js"
import TheContainer from "./components/container.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    TheContainer,
  },
  
  data() {
    return {
      TimeLineData,
      click: 0,
      urlLink : "",
      step : 0,
      imgurl : "",
      filter_selected : "",
    }
  },
  mounted(){
    this.emitter.on('Filter_click', (a)=>{
      this.filter_selected = a;
    });
  },
  methods: {
    more(){
      if(this.click == 0) this.urlLink = "https://codingapple1.github.io/vue/more0.json"
      else this.urlLink =  "https://codingapple1.github.io/vue/more1.json"
      axios.get(this.urlLink)
      .then((result) => {
        this.TimeLineData.push(result.data)
        this.click++;
      })
    },
    upload(e){
      let file = e.target.files;
      this.imgurl = URL.createObjectURL(file[0]);
      console.log(this.imgurl);
      this.step = 1;
    },
    publish(){
      var uploadwriting = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgurl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content_writing,
        filter: this.filter_selected,
      };
      this.TimeLineData.unshift(uploadwriting);
      this.step = 0 ;
    }
  },
  
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
