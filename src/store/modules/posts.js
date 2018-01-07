const posts = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    posts: ({ data }) => (data)
  },
  mutations: {
    addBlogPost(state, post) {
      state.data.push(post)
    }
  },
  actions: {
  }
}

export default posts
