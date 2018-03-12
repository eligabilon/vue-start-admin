// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import msg from './pt_BR';

Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(BootstrapVue);

Vue.use(VeeValidate, {

  locale: 'pt_BR',
  dictionary: {

    pt_BR: {

      messages: msg
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
