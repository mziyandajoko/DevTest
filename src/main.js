import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAPS_API,
    
  },
  
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
