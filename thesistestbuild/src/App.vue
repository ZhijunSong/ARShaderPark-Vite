<template>
   <v-app class="wrapper">
   
    <v-navigation-drawer   
     v-model="drawer"
      bottom
      temporary
      id="drawers"
    >
     <!-- <li><router-link to="/">Intro</router-link></li><br> -->

     <li><router-link to="/about">About</router-link></li><br>
     <li><router-link to="/intro">Intro</router-link></li><br>

     <li><router-link to="/">Home</router-link></li><br>
     </v-navigation-drawer>
    <v-main>
    <v-btn id="menu">
    <v-app-bar-nav-icon
           color="white"
          @click.stop="drawer = !drawer"
    >
    </v-app-bar-nav-icon>
    </v-btn>

     <router-view></router-view>
    </v-main>
   </v-app>

</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
      }
    },
  }
</script>

<style>
button.v-btn.v-btn--elevated.v-btn--icon.v-theme--light.bg-white.v-btn--density-default.v-btn--size-default.v-btn--variant-contained.v-app-bar-nav-icon {
    box-shadow: none;
}
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
#menu{
  position:sticky;
  display: block;
  left:20px;
  top:20px;
  z-index: 999;
}

  
</style>