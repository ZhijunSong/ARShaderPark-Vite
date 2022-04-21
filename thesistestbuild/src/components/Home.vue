<template>
<v-app class="home">  

    <v-main>
    <aframecomponent></aframecomponent>

  <div class="arjs-loader">
    <div>Loading, please wait...</div>
  </div>
    
    </v-main>

    <UI/>
</v-app>
    
</template>
<script  type="module">
import aframecomponent from './AR.vue';
export default {
  
components:{
    aframecomponent
},
  
}
// const count = ref(0)
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
.ui{
  z-index: 999;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button#volumecontrol{
    border: none;
    background: none;
    display: block;
    position:absolute;
    right:20px;
    bottom: 10px;
    color:white;
}
#location{
   position:absolute;
   left: 10px;
   color:white;
   font-weight: 600;
   font-size: 12px;
   top:10px;
}    
.ui{
  display: block;
  z-index: 1;
  width: 100%;
  height:100%;

}
video{
  z-index:-999;
  overflow: hidden;
  visibility: hidden;
}
.arjs-loader {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: none;
  z-index: 9999;
  display:none;
  justify-content: center;
  align-items: center;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: rgb(0, 0, 0);
}

  
</style>