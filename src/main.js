import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";
import firebase from "firebase";

Vue.config.productionTip = false
Vue.prototype.$axios = axios

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBDhU51b-WkErPNzaXRPDskIG6-obDjOyI",
  authDomain: "tenniscamp-8eea9.firebaseapp.com",
  databaseURL: "https://tenniscamp-8eea9.firebaseio.com",
  projectId: "tenniscamp-8eea9",
  storageBucket: "tenniscamp-8eea9.appspot.com",
  messagingSenderId: "168459592873",
  appId: "1:168459592873:web:32918be5d0d57fdbd735b8",
  measurementId: "G-TPM96HKBQ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
