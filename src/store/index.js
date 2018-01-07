import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.http.options.root = '/src/components'

import skills from './modules/skills'
import posts from './modules/posts'
import works from './modules/works'

export const store = new Vuex.Store({
  getters: {
    $http: () => (VueResource)
  },
  modules: {
    skills,
    posts,
    works
  }
})
