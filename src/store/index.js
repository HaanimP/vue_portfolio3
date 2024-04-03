import { createStore } from 'vuex';
const hostedData = "https://haanimp.github.io/data/"
export default createStore({
  state: {
    about: [],
    home: [],
    Resume: [],
    job:[],
    testimonial:[],
    projects:[],
    Skills: []
  },
  mutations: {
    setData(state, data) {
      state.about = data; // Access the "About" property in the response
    },
    setHome(state, homedata) {
      state.home = homedata
    },
    setResume(state,data){
      state.Resume = data
    },
    setJob(state,data){
      state.job = data
    },
    setTestimonial(state,data){
      state.testimonial = data
    },
    setProjects(state,data){
      state.projects = data
    },
    setSkills(state,data){
      state.Skills = data
    }
  },
  actions: {
    fetchData({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            // console.log(data)
            commit('setData', data.About[0]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchHome({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            commit('setHome', data.HomeArray);
            // Optionally, you can perform additional actions here if needed
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    
    fetchSkills({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.SkillsArray)
            commit('setSkills', data.SkillsArray);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchResume({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.Resumearray)
            commit('setResume', data.Resumearray);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchTestimonial({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data[0])
          commit('setTestimonial', data.TestimonialsArray);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchProjects({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
          //  console.log(data)
          commit('setProjects', data.ProjectsArray);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    }
  },
  modules: {},
});