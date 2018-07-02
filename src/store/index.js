import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
import * as moreGetters from './getters'

import * as moreActions from './action'

Vue.use(Vuex)

const state = {
  user: ls.getItem('user'),
  auth: ls.getItem('auth'),
  articles: ls.getItem('articles'),
}

const mutations = {
  UPDATE_USER(state, user) {
    state.user = user
    ls.setItem('user', user)
  },
  UPDATE_AUTH(state, auth) {
    state.auth = auth
    ls.setItem('auth', auth)
  },
  UPDATE_ARTICLES(state, articles) {
    state.articles = articles
    ls.setItem('articles', articles)
  },
}

const actions = {
  login({commit}, user) {
    if (user) commit('UPDATE_USER', user)
    // 更新当前用户的登录状态为已登录
    commit('UPDATE_AUTH', true)
    router.push('/')
  },
  logout({commit}) {
    commit('UPDATE_AUTH', false)
    router.push({name: 'Home', params: {logout: true}})
  },
  updateUser({state, commit}, user) {
    const stateUser = state.user

    if (stateUser && typeof stateUser === 'object') {
      user = {...stateUser, ...user}
    }

    commit('UPDATE_USER', user)
  },
  ...moreActions,
}

const getters = {
  getArticleById: (state, getters) => (id) => {
    // 使用派生状态 computedArticles 作为所有文章
    let articles = getters.computedArticles

    if (Array.isArray(articles)) {
      articles = articles.filter(article => parseInt(id) === parseInt(article.articleId))
      return articles.length ? articles[0] : null
    } else {
      return null
    }
  },
  // 混入 moreGetters, 你可以理解为 getters = Object.assign(getters, moreGetters)
  ...moreGetters
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
