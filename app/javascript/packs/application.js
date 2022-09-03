// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs")
require("turbolinks").start()
require("channels")

window.Rails = Rails
Rails.start();

import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import App from '../app.vue'
import Rails from '@rails/ujs';
import TurbolinksAdapter from 'vue-turbolinks'

Vue.use(Vuex)
Vue.use(TurbolinksAdapter)


document.addEventListener("turbolinks:load", function() {
    var element = document.querySelector("#boards")
    if (element != undefined) {  
        const app = new Vue({
            el: element,
            data: {
                lists: JSON.parse(element.dataset.lists)
            },
            template: "<App :original_lists='lists' />",
            components: { App }
        })
    }
});
//= require turbolinks