const publicStore = {
  namespaced: true,

  state: {
    isIphoneX: false,
    isWXBrowser: false
  },

  mutations: {
    updateIsIphoneX (state, payload) {
      state.isIphoneX = payload
    },

    updateIsWXBrowser (state, payload) {
      state.isWXBrowser = payload
    },
  }
};

export default publicStore
