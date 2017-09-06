import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      pageTitle: ''
    },
    mutations: {
      setPageTitle (state, title) {
        state.pageTitle = title
      }
    }
  })
}

export default createStore
