import Vue from 'vue';
import App from './App.js'
import iView from 'iview';
import VeeValidate from 'vee-validate';
import { store } from './_store';
import {router} from './_helper';
import 'iview/dist/styles/iview.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(router)

Vue.use(iView);

// The routing configuration

Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from './_helper';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

