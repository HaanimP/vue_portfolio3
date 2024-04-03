<!-- App.vue -->

<template>
  <div id="app">
    <navbar-component />
    
    <spinner-component v-if="loading" />
    <router-view v-if="!loading" />
    
    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SpinnerComponent from "./components/SpinnerComponent.vue";

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    HomeView,
    ProjectsView,
    SpinnerComponent,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    // Example method to simulate data loading (replace with actual data loading logic)
    loadData() {
      this.loading = true;
      // Simulate a delay (replace with actual data fetching)
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
  created() {
    // Call the loadData method when the component is created
    this.loadData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #664229;
  color: #2c3e50;
}
</style>