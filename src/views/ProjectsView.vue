<template>
    <div class="body">
      <h2 class="pro">Projects</h2>
      <div class="container mt-5 mb-5">
        <section class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div
            v-for="project in $store.state.projects"
            :key="project.id"
            class="col animate__animated animate__backInLeft"
          >
            <div class="card h-100">
              <img :src="project.image" class="card-img-top" alt="Project Image" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 class="card-title font-weight-bold">{{ project.title }}</h5>
                  <p class="card-text">{{ project.description }}</p>
                </div>
                <div class="project-links d-flex justify-content-center">
                  <h6 v-if="project.Github" class="me-3">
                    <a :href="project.Github" target="_blank">GitHub</a>
                  </h6>
                  <h6 v-if="project.Vercel">
                    <a :href="project.Vercel" target="_blank">Vercel</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import "animate.css";
  import { mapActions } from "vuex";
  
  export default {
    computed: {
      fetchProjects() {
        this.$store.dispatch("fetchProjects");
      },
    },
    methods: {
      ...mapActions("projects", ["fetchProjects"]),
    },
    mounted() {
      this.fetchProjects;
    },
  };
  </script>
  
  <style scoped>
  .body {
    background-image: url("https://i.ibb.co/r5gYfTd/pro.jpg");
    background-size: cover;
    background-position: center;
    padding: 20px;
    height: 150vh;
    font-family: "Merriweather", serif;
  }
  
  .card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }

  .pro {
    color: #000;
    font-weight: 600;
  }
  
  .card-body {
    padding: 1.25rem;
    background: linear-gradient(to bottom right, #a67b5b, #402b1c);
  }
  
  .card-title,
  .card-text,
  .project-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .btn-link:hover {
    text-decoration: underline;
  }
  
  .project-links h6 {
    margin: 0;
  }
  
  @media only screen and (max-width: 600px) {
    .body {
      background-size: contain;
      height: auto;
    }
  }
  </style>