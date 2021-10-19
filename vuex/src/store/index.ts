import { createStore } from "vuex";

export default createStore({
  state: {
    courses: [{
      name: 'Js fundamentals',
      author: 'Nitesh',

    }, {
      name: 'Python fundamentals',
      author: 'Santu',

    }]
  },
  mutations: {
    deleteCourse: (state, name) => {
      state.courses = state.courses.filter(course => course.name !== name)
    },

    addCourse: (state, course) => {
      state.courses.push(course)
    }

  },
  actions: {},
  modules: {},
});
