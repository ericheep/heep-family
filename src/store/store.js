import Vue from 'vue'
import Vuex from 'vuex'
import { fetchBlogPosts } from '../utils/contentful-actions'

Vue.use(Vuex)


export const store = new Vuex.Store({
  strict: true,
  state: {
    test: true,
    blogPosts: [],
  },
  actions: {
    getBlogPosts({ commit }) {
      fetchBlogPosts().then(blogPosts=> {
        commit('GET_BLOG_POSTS', blogPosts.items)
      })
    },
  },
  mutations: {
    GET_BLOG_POSTS(state, blogPosts) {
      state = {
        blogPosts: blogPosts
      }
    },
  },
})
