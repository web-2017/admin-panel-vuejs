const skills = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    skills: ({ data }) => (data)
  },
  mutations: {
    addNewSkill(state, skill) {
      state.data.push(skill)
    },
    removeSavedSkill(state, skillId) {
      state.data = state.data.filter(skill => (skill.id !== skillId))
    }
  },
  actions: {
    fetchSkills({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('About/data.json').then(response => {
        state.data = response.body
      }, response => {
        console.error(response)
      })
    }
  }
}

export default skills
