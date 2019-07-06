import Vue from 'vue'
import Vuex from 'vuex'
import { fetchBlogPosts } from '../utils/contentful-actions'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { formatMonthDay } from '../utils/helpers'

Vue.use(Vuex)


export const store = new Vuex.Store({
  strict: true,
  state: {
    test: true,
    blogPosts: [],
  },
  actions: {
    getBlogPosts({ commit }) {
      fetchBlogPosts().then(rawBlogPosts=> {
        const blogPosts = rawBlogPosts.items.map(rawBlogPost => {
          return {
            title: rawBlogPost.fields.title,
            slug: rawBlogPost.fields.slug,
            htmlStringDescription: documentToHtmlString(rawBlogPost.fields.description),
            createdAt: formatMonthDay(new Date(rawBlogPost.sys.createdAt)),
            gridImage: {
              url: rawBlogPost.fields.gridImage.fields.file.url,
            }
          }
        })
        commit('GET_BLOG_POSTS', blogPosts)
      })
    },
  },
  mutations: {
    GET_BLOG_POSTS(state, blogPosts) {
      state.blogPosts = blogPosts
    },
  },
})
