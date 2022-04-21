<template>
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
        position="-1 -2 1"
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
</template>
<script type="module">
import {sculptToMinimalRenderer,createSculptureWithGeometry} from 'shader-park-core';
import { nextTick } from 'vue'
import {spCode} from '../spCode.js';
export default{

  name:'aframecomponent',
  data(){
    return{
    soundsrc:"src/assets/Ambience underwaterwav.mp3",
    }
  },
 

  methods:{
    shaderShell(){
        AFRAME.registerComponent("sp-aframe", {
        init: function () {
          this.geometry = new THREE.SphereGeometry(10,10,10);
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
   async mounted() {
    await nextTick();
    this.shaderShell();
  // let canvas = this.$refs.myCanvas;
  //  sculptToMinimalRenderer(canvas, spCode);
  },


}
</script>