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

var firebaseConfig = {
  apiKey: "AIzaSyCQHORl8ANL2DIGa3vaW28On-J3mMIqU-o",
  authDomain: "tenniscamp-782ef.firebaseapp.com",
  databaseURL: "https://tenniscamp-782ef.firebaseio.com",
  projectId: "tenniscamp-782ef",
  storageBucket: "tenniscamp-782ef.appspot.com",
  messagingSenderId: "116093815715",
  appId: "1:116093815715:web:19d536d7d1cd702308e816",
  measurementId: "G-DSHGC97SFY"
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
