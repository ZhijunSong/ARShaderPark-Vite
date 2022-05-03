<template>
  <v-app id="arapp">
    <v-main>
      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
		    embedded
      >
        <a-assets>
           <audio
            id="test"
            preload="auto"
            cross-origin="anonymous"
            volume="1"
            src="src/assets/soundclip.mp3"
          ></audio>
          <audio
            id="test2"
            preload="auto"
            cross-origin="anonymous"
            volume="1"
            src="src/assets/tablebounce.wav"
          ></audio>
         
        </a-assets>
      
          <!-- <a-entity clickhandler emitevents="true" cursor="rayOrigin: mouse" 
          id="animated-marker" 
          raycaster="objects: [clickhandler]"
          > -->
          <a-entity
          sp-aframe
          position="0 10 0"
          scale="10 10 10"
          look-at="[gps-camera]"
          gps-entity-place="latitude:40.737129; longitude:-73.992436;"
        ></a-entity>

          <!-- <a-entity
          newsp-aframe
          position="0 20 0"
          scale="10 10 10"
          sound="src:#test2; autoplay:true"
          look-at="[gps-camera]"
          gps-entity-place="latitude:40.748405; longitude:-73.989212;"
        ></a-entity> -->
          <a-box
          id="clickable"
          position="0 0 0"
          look-at="[gps-camera]"
          rotation="0 45 0"
          color="#4CC3D9"
          shadow
          sound="src:#test; autoplay:true"
          gps-entity-place="latitude:40.7484197; longitude:-73.9893421;">
        </a-box>
          <!-- </a-entity> -->
         
       
        <a-camera fov="40" gps-camera="minDistance:2;maxDistance:10" rotation-reader>
          
          
        </a-camera>
      </a-scene>
    </v-main>
    <!-- <v-card height="100px" elevation="1"> -->
    <v-toolbar dense>
      <v-row class="sm-6">
        <v-col sm-2><router-link to="/about">About</router-link></v-col>
        <v-col
          ><p>lat:{{ lat }}, long:{{ lon }}</p></v-col
        >
        <v-col>
          <v-btn @click="onoff">
            <span v-if="on" class="material-icons">volume_up</span>
            <span v-if="!on" class="material-icons">volume_off</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
    <!-- </v-card> -->
  </v-app>
</template>
<script type="module">
// import '@ar-js-org/ar.js'
import {nextTick} from 'vue';
import {sculptToMinimalRenderer,createSculptureWithGeometry} from 'shader-park-core';
import {spCode} from '../spCode.js';
// import {newspCode} from '../spCode_.js';

export default{

  name:'aframecomponent',
  data(){
    return{
    // soundsrc:"src/assets/Ambience underwaterwav.mp3",
    on: true,
     lat:0,
     lon:0, 
     description: null,
     fileid: null, 
    //  soundUrl
    }
  },
  // created() {
  //   this.shader();
  //   this.newshader();
  // },
  async mounted() {

      await nextTick();

    this.getLocation();
    this.shader();
    const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
    console.log(distanceMsg);   
  },
  methods:{
      onoff(){
        this.on =!this.on;
      },
      loadfile(){
      document.getElementById('test').src =soundUrl;

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
            this.geometry = new THREE.SphereGeometry(50,50,50);
            this.params = {
              time: 0.0,
              soundLevel:1.0
            };
            let mesh = createSculptureWithGeometry(this.geometry, spCode, () => ({
              time: this.params.time,
              soundLevel:this.params.soundLevel
              // sound: this.params.sound,
            }));
            this.material = new THREE.MeshStandardMaterial();
            this.mesh = new THREE.Mesh(this.geometry, this.material);
            this.mesh.material = mesh.material;
            this.mesh.onBeforeRender = mesh.onBeforeRender;
            this.el.setObject3D("mesh", this.mesh);
          },
          tick: function (time, timeDelta) {
            this.params.time += 0.01;
          },
        });
      },
    
      // shader(){
      //     AFRAME.registerComponent("newsp-aframe", {
      //     init: function () {
      //       this.geometry = new THREE.SphereGeometry(50,50,50);
      //       this.params = {
      //         time: 0.0,
      //         _scale:1.2,
      //       };
      //       let mesh = createSculptureWithGeometry(this.geometry, newspCode, () => ({
      //         time: this.params.time,
      //         soundVal:this.params.soundVal,
      //         soundVal2:this.params.soundVal2,
      //         soundLevel:this.params.soundLevel,
      //         noiseScale:this.params.noiseScale,
      //         newin:this.params.newin,
      //         blendLevel:this.params.blendLevel

      //         // sound: this.params.sound,
      //       }));
      //       this.material = new THREE.MeshStandardMaterial();

      //       this.mesh = new THREE.Mesh(this.geometry, this.material);
      //       this.mesh.material = mesh.material;
      //       this.mesh.onBeforeRender = mesh.onBeforeRender;
      //       this.el.setObject3D("mesh", this.mesh);
      //       // this.el.object3D.scale.set(0.1,0.1,0.1);
      //     },
      //     tick: function (time, timeDelta) {
      //       this.params.time += 0.01;
      //       this.params.soundVal = [0.0,0.0,1.0];
      //       this.params.soundLevel =0.2;
      //       this.params.soundVal2 = [10.0,0,200];
      //       this.params.noiseScale = (20,0,200);
      //       this.params.newin = (0.02);
      //       this.params.blendLevel = (0.2);
      //     },
      //   });
      // },
      clicker(){
   AFRAME.registerComponent('clickhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#clickable");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        });
}});

      }
    }

// let soundVal = input();//0.0, 0.0, 1.0
// let soundLevel =input();//0.2
// let soundVal2= input();//10, 0, 200//gyscale
// let noiseScale = input();//20, 0, 200
// let newin = input();//0.02
// let blendLevel = input();//0.2

}
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
#arapp{
  height:100%;
  widows: 100%;
}
</style>