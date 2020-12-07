import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
// import * as fb from 'firebase'
import  fb from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

 Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     router,
//     store,
//     components: { App },
//     template: '<App/>',
new Vue({
    render: h => h(App),
    router,
    store,
    components: { App },
     created () {
        fb.initializeApp({
             apiKey: 'AIzaSyCpI9T-2zUlqR49-1Pl3huvCi-JDXtW60Y',
             authDomain: 'spaapp-63602.firebaseapp.com',
             databaseURL: 'https://spaapp-63602.firebaseio.com',
            projectId: 'spaapp-63602',
             storageBucket: 'spaapp-63602.appspot.com',
             messagingSenderId: '1006982826474',
            appId: '1:1006982826474:web:e672ece7fb8c16ca3f8a93'
         })
         fb.auth().onAuthStateChanged(user => {
             if (user) {
                 this.$store.dispatch('autoLoginUser', user)
             }
         })
         this.$store.dispatch('fetchAds')
     }
 })





