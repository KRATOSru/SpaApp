import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: {App},
  template: '<App/>',
  created() {
      fb.initializeApp({
          apiKey: 'AIzaSyCpI9T-2zUlqR49-1Pl3huvCi-JDXtW60Y',
        authDomain: 'spaapp-63602.firebaseapp.com',
        databaseURL: 'https://spaapp-63602.firebaseio.com',
        projectId: 'spaapp-63602',
        storageBucket: 'spaapp-63602.appspot.com',
        messagingSenderId: '1006982826474',
        appId: '1:1006982826474:web:e672ece7fb8c16ca3f8a93'
  })
  }
})
// var firebaseConfig = {
//     apiKey: "AIzaSyCpI9T-2zUlqR49-1Pl3huvCi-JDXtW60Y",
//     authDomain: "spaapp-63602.firebaseapp.com",
//     databaseURL: "https://spaapp-63602.firebaseio.com",
//     projectId: "spaapp-63602",
//     storageBucket: "spaapp-63602.appspot.com",
//     messagingSenderId: "1006982826474",
//     appId: "1:1006982826474:web:e672ece7fb8c16ca3f8a93"
// };
// fb.initializeApp(firebaseConfig);
