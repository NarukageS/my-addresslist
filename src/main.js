import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyDlARAkQd8ag-mgZh60iihnaXlZiLordfM",
        authDomain: "my-address-pj-858ea.firebaseapp.com",
        projectId: "my-address-pj-858ea",
        storageBucket: "my-address-pj-858ea.appspot.com",
        messagingSenderId: "160104862580",
        appId: "1:160104862580:web:ee43adaabb7bd5d116d221"
      };
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
