import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";
import firebase from "firebase";

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCphC140TfdGnuPzmzfpM4qqD17yj_wQA8",
  authDomain: "tenniscamp-vue-4594c.firebaseapp.com",
  databaseURL: "https://tenniscamp-vue-4594c.firebaseio.com",
  projectId: "tenniscamp-vue-4594c",
  storageBucket: "tenniscamp-vue-4594c.appspot.com",
  messagingSenderId: "142143231961",
  appId: "1:142143231961:web:66e50f7f57125d3664ebc8",
  measurementId: "G-W6JN8XZHGG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
