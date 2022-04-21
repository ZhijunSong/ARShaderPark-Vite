<template>
<v-container>
    <div class="ui">
    <!-- <button id="back" @click = "quitApp"><span class="material-icons">arrow_back</span></button> -->
    <li id="location"><p>lat:{{lat}}, long:{{lon}}</p></li>
    <button id="volumecontrol" @click="onoff">
      <span v-if="on" class="material-icons">volume_up</span>
      <span v-if="!on" class="material-icons">volume_off</span>
    </button>
    </div>
</v-container>
</template>
<script type="module">
export default{
  name:'UI',
  data(){
    return{
     on: true,
     lat:0,
     lon:0, 
     sound: null,
     description: null,
     fileid: null, 
    }
  },
  methods:{
    onoff(){
      this.on =!this.on;
      // console.log(this.on);
    },
    quitApp(){
      // this.on = true;
      this.$router.push('/'); 

    },
    getLocation(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          position=>{
            this.lat=Math.round(position.coords.latitude * 100) / 100;
            this.lon=Math.round(position.coords.longitude*100)/100;
          }
        );
      }
    },
  },
  mounted:function(){
    this.getLocation();
  }
}

</script>

<style>
#back{
  position:absolute;
  display:block;
  left:20px;
  height:20px;
}
.material-icons{
  color:white
}
#app{
  margin-top:0px !important;
  display:absolute;
  top:-10px;
}
body {
  font-family: helvetica, arial, sans-serif;
  margin: 2em;
  width: 100vw; 
  height: 100vh; 
  margin : 0px; 
  padding : 0px; 
  border : 0px; 
  background-color : white;
}

h1 {
  font-style: italic;
  color: #373fff;
}

canvas {
  width: 100%;
  height: 100%;
  margin : 0px;
  padding : 0px;
  border : 0px;
  background-color : transparent;
}  
  
</style>