const works = {
  namespaced: true,
  state: {
    data: {}
  },
  actions: {
    addNewWork({ state, rootGetters }, fields) {
      console.log(fields)
    }
  }
}

export default works
