import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCy-lFi4HjNQNm7d_6rxxPWP_9eFXirja4",
  authDomain: "tenniscamp-vue.firebaseapp.com",
  databaseURL: "https://tenniscamp-vue.firebaseio.com",
  projectId: "tenniscamp-vue",
  storageBucket: "tenniscamp-vue.appspot.com",
  messagingSenderId: "860330926931",
  appId: "1:860330926931:web:7d7bbc1e246636716e37a6",
  measurementId: "G-S5TVW931CM"
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
