import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./router"
// import AFRAME from 'aframe';
loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  // .use(AFRAME)
  .mount('#app')


