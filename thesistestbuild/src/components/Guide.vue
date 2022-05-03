<template>
<v-main>
  <v-row class="sm-6" no-gutters>
    <v-col offset-md="2">
      <v-card class="pa-2" elevation="0">
        <div class="about align-start">
          <v-card-title>Instruction</v-card-title>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col v-for="n in 5" :key="n">
        <v-row>
        <v-img 
        v-bind:src="'src/assets/'+imgstr[n]+'.png'"
        height="50" width="50" v-bind:id="imgstr[n]"></v-img>
        <v-list-item-subtitle>{{category[n]}}</v-list-item-subtitle>
        </v-row>
      </v-col>
  </v-row>

      <span class="material-icons" style="font-size:80px">screen_rotation</span>
      <v-row>Please rotate the screen for better experience.</v-row>
      <v-btn><router-link to="/app">Enter</router-link></v-btn>


</v-main>
  <!-- <v-col>
      <v-btn>
        <span class="material-icons" @click="this.$router.push('/app')" >Enter</span>
      </v-btn>
         </v-col> -->
</template>
<style>
#app {
  margin-top: 0px;
}
</style>
<script type="module">
export default {
  name: "guide",
  data() {
    return {
      imgstr: ["red", "green", "blue", "white", "orange", "cyan"],
      category:['Eletric Power Lines, Cables','Sewer and Drain Lines','Potable Water','Proposed Excavation','Communication Signal Lines','Reclaimed Water']
    };
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  methods: {
    log() {

      console.log(this.imgstr);
    },
  },
  mouted: {},
};
</script>
