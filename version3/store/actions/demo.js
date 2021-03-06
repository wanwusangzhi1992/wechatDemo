const { $api, $request, $routerMap } = wx.ct
const URL = {
  GET_LOCATION_LIST: 'https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api',
  GET_MOVIE_LIST: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api',
  GET_MOVIE_DETAIL: 'https://ticket-api-m.mtime.cn/movie/detail.api',
}
/**
wx.ct.$store.dispatch('demo/demoAction', {
  id: 123
})
 */
const actions = {
  mergeCountAction({ commit }, payload) {
    return commit('demo/mergeCount', payload)
  },
  mergeCountActionAsync ({commit}, payload) {
    return new Promise((resolve, reject) => {
      const res = commit('demo/mergeCount', payload);
      resolve(res)
    });
  },
  demoGetList ({commit}, payload) {
    return $request({
      url: URL.GET_LOCATION_LIST,
      data: payload,
      success(res) {
        console.warn('res', res)
      }
    }).then(res => {
      console.warn('get', res)
    }).catch(err => {
      console.warn('outer catch', err)
    })
  },
  demoAction({ commit, dispatch, state }, payload) {
    commit('demo/demoCommit', payload)
    dispatch('demo/demoAction1', {name: 'YeWen'})
    console.warn($api.navigateTo($routerMap.pageswelcome, { obj: 123 }))
  },
  demoAction1({ commit, dispatch, state }, payload) {
    commit('demo/demoCommitName', payload)
  }
}

export default {
  actions
}