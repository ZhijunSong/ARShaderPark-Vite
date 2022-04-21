<template>
  <v-app class="wrapper">

    <!-- <v-main>
    </v-main> -->
   <router-view></router-view>

  </v-app>
</template>
<script>
import { nextTick, onMounted, render } from 'vue'

export default {
 data(){
    return{
    // soundsrc:"src/assets/Ambience underwaterwav.mp3",
    drawer:null,
    on: true,
     lat:0,
     lon:0, 
     sound: null,
     description: null,
     fileid: null, 
    }
  },
  methods: {
    onoff() {
      this.on = !this.on;
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
 async mounted(){
   await nextTick();

    this.getLocation();
  }

};
</script>

<style>
button.v-btn.v-btn--elevated.v-btn--icon.v-theme--light.bg-white.v-btn--density-default.v-btn--size-default.v-btn--variant-contained.v-app-bar-nav-icon {
  box-shadow: none;
}
/* .v-toolbar v-toolbar--density-default v-theme--light v-app-bar{
  
    z-index: 1004;
    transform: translateY(0%);
    position: absolute;
    margin-left: 0px;
    margin-top: 0px;
    display: flex;
    bottom: 0%;
    width: calc((100% - 0px) - 0px);
    justify-content: flex-end;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ui {
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
button#volumecontrol {
  border: none;
  background: none;
  display: block;
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: black !important;
}
#location {
  position: absolute;
  left: 10px;
  color: white;
  font-weight: 600;
  font-size: 12px;
  top: 10px;
}
.ui {
  display: block;
  z-index: 1;
  width: 100%;
  height: 100%;
}
video {
  z-index: -999;
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
  display: none;
  justify-content: center;
  align-items: center;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: rgb(0, 0, 0);
}
#menu {
  position: sticky;
  display: block;
  left: 20px;
  top: 20px;
  z-index: 999;
}
</style>