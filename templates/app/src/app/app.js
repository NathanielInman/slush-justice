import 'babel-polyfill';
import 'buefy/lib/buefy.css'
import './app.styl';
import Vue from 'vue/dist/vue.common';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import {routes} from './routes';
import template from './app.pug';

// Ensure that we're using the official vue router
Vue.use(VueRouter);
Vue.use(Buefy);

// Prepare the main template
document.querySelector('app').innerHTML=template();

// initialize the routes
const router = new VueRouter({routes});

// initialize the application
export const app = new Vue({
  router,
  created(){
    let user = localStorage.getItem('user');

    if(!user){
      this.$router.push('/login');
    }else{
      this.user = JSON.parse(user);
      this.$router.push('/');
    }//end if
  },
  data(){
    return {menuActive: 0};
  }
}).$mount('app');
