<template>
<v-app>
      <a-scene
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
    >
     <a-assets>
        <!-- <audio
          id="test"
          preload="auto"
          cross-origin="anonymous"
          src="src/assets/Ambience underwaterwav.mp3"
        ></audio> -->
      </a-assets>
      <a-entity
        sp-aframe
        position="-1 -10 1"
        scale="0.5 0.5 0.5"
        look-at="[gps-projected-camera]"
      ></a-entity>
        <a-box
        id="box"
        position="-1 0.5 -2"
        look-at="[gps-projected-camera]"
        rotation="0 45 0"
        color="#4CC3D9"
        shadow
       change-color-on-hover="color: blue"
      ></a-box>
      <a-camera fov="40" gps-projected-camera rotation-reader> </a-camera>

    </a-scene>

    <v-container>
    <div class="ui">
    <!-- <button id="back" @click = "quitApp"><span class="material-icons">arrow_back</span></button> -->
    <li id="location"><p>lat:{{lat}}, long:{{lon}}</p></li>
    <button id="volumecontrol" @click="onoff">
      <span v-if="on" class="material-icons">volume_up</span>
      <span v-if="!on" class="material-icons">volume_off</span>
    </button>

        <canvas ref="myCanvas"></canvas>  

    </div>
</v-container>
</v-app>

</template>
<script type="module">
import '@ar-js-org/ar.js'
import {sculptToMinimalRenderer,createSculptureWithGeometry} from 'shader-park-core';
import { nextTick, onMounted, render } from 'vue'
import {spCode} from '../spCode.js';
// import '@ar-js-org/ar.js/aframe';
export default{

  name:'aframecomponent',
  data(){
    return{
    // soundsrc:"src/assets/Ambience underwaterwav.mp3",
    on: true,
     lat:0,
     lon:0, 
     sound: null,
     description: null,
     fileid: null, 
    }
  },
  async mounted() {
    await nextTick();
    this.getLocation();
    this.shader();
//   let canvas = this.$refs.myCanvas;
//    sculptToMinimalRenderer(canvas, spCode);
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
    shader(){
        AFRAME.registerComponent("sp-aframe", {
        init: function () {
          this.geometry = new THREE.SphereGeometry(30,30,30);
          this.params = {
            time: 0.0,
            _scale:1.2,
          };
          let mesh = createSculptureWithGeometry(this.geometry, spCode, () => ({
            time: this.params.time,
            // sound: this.params.sound,
          }));
          this.material = new THREE.MeshStandardMaterial();

          this.mesh = new THREE.Mesh(this.geometry, this.material);
          this.mesh.material = mesh.material;
          this.mesh.onBeforeRender = mesh.onBeforeRender;
          this.el.setObject3D("mesh", this.mesh);
          // this.el.object3D.scale.set(0.1,0.1,0.1);
        },
        tick: function (time, timeDelta) {
          this.params.time += 0.01;
        },
      });
      }
  },



}
</script>