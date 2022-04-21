<template>
<div class="Intro">
    <v-col sm="12">

<v-card
  class="pa-2"
  elevation="2"
  tile
  > 
  
  <v-card-title>Disclaimer</v-card-title>
  <v-row>
    <v-card-text >
      Before continuing to the website...<br>
      This product may require to access your location data. 
      If you consent with this requirement. Please click agree and enter the expeirence.<br>
      <strong style="color:red">Warning:</strong> 
      Be awared your surroundings and traffics when going through this experience.
      Submitting the agree button is meaning that you are responsible for your own safety during this expeirence. <div class=""></div>

    </v-card-text>
     
  </v-row>
  <v-row no-gutters class="mb-6" justify="center">
           <v-col lg="2">
    <v-checkbox
      v-model="checkbox1"
      :label="`disagree`"
    ></v-checkbox>
        </v-col>
      <!-- <v-col> -->
        <v-col lg="2">
    <v-checkbox
      v-model="checkbox2"
      :label="`agree`"
    ></v-checkbox>
        </v-col>

 
    </v-row>
   <v-row sm="12" justify="center">
    <v-btn @click="agree()">Confirm</v-btn>
    </v-row>
    </v-card>
  </v-col>

 
</div>
    
</template>
<script>
  export default {
    data () {
      return {
        checkbox1: false,
        checkbox2: false,

      }
    },
    methods:{
      agree(){
        if(this.checkbox2==true&&this.checkbox1==false){
          this.$router.push('/vitetestbuild/app'); 
        }else{
          this.checkbox2 ==false;
          this.checkbox1 ==false;
        }

      },

    },

  }
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