<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #987554;">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <!-- Logo Image -->
          <img src="https://i.postimg.cc/fbYy4Yf1/logo2.png" alt="Logo" class="logo">
        </router-link>
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-between w-100">
            <li class="nav-item">
              <router-link to="/" class="nav-link" style="color: #D2B48C; font-weight: bold;">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" style="color: #D2B48C; font-weight: bold;">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link" style="color: #D2B48C; font-weight: bold;">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/resume" class="nav-link" style="color: #D2B48C; font-weight: bold;">Education & Experience</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/testimonials" class="nav-link" style="color: #D2B48C; font-weight: bold;">Reviews</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" style="color: #D2B48C; font-weight: bold;">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent',
  };
  </script>
  
  <style scoped>
  .logo {
    max-height: 40px;
  }

  .nav-link:hover {
      color: #8B4513 !important;
    }

    .collapse{
      font-family: 'Merriweather', serif;
    }
  
  @media (max-width: 768px) {
    .navbar {
      padding: 10px;
    }
  
    .navbar-collapse {
      flex-direction: column; /* Stack items vertically */
      text-align: center;
    }
  
    .nav-item {
      margin: 5px 0; /* Adjust margin for better spacing */
    }
  
    .nav-link:hover {
      color: #8B4513 !important;
    }
  }
  </style>