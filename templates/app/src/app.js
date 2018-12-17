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

// initialize the routes
const router = new VueRouter({routes});

// initialize the application
export const app = new Vue({
  el: '#<%= name %>',
  router,
  components: {
    app: {
      template: template(),
      data(){ return {menuActive: 0}; }
    }
  }
});
