<template>
  <footer class="footer">
    <div class="container py-5">
      <div class="row gx-5 align-items-center">
        <!-- Image Column -->
        <div class="col-lg-3 col-md-6 order-lg-1 order-md-1 order-1">
          <img src="https://i.postimg.cc/fbYy4Yf1/logo2.png" alt="Footer Image" class="img-fluid" style="max-height: 700px;">
        </div>
        <!-- Content Columns -->
        <div class="col-lg-5 col-md-6 order-lg-2 order-md-3 order-3">
          <h5 class="footer-title mb-4">Haanim Pietersen</h5>
          <p class="footer-text mb-4">Talk is cheap, show me the code.</p>
          <p class="footer-text mb-0">All rights reserved to Haanim's Closet <i class="far fa-copyright"></i> {{ currentYear }}.</p>
          <div class="social-icons">
              <a href="https://vercel.com/haanims-projects" target="_blank"><i class="fa-solid fa-square-caret-up"></i></a>
              <a href="https://github.com/HaanimP" target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href="https://za.linkedin.com/in/haanim-pietersen-172bb9264" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 order-lg-3 order-md-2 order-2">
          <h5 class="footer-title mb-4">Quick links</h5>
          <ul class="list-unstyled footer-list mb-0">
            <li class="mb-2"><router-link to="/">Home</router-link></li>
            <li class="mb-2"><router-link to="/about">About</router-link></li>
            <li class="mb-2"><router-link to="/projects">Projects</router-link></li>
            <li class="mb-2"><router-link to="/resume">Education & Experience</router-link></li>
            <li class="mb-2"><router-link to="/testimonials">Reviews</router-link></li>
            <li class="mb-2"><router-link to="/contact">Contact Me</router-link></li>
          </ul>
        </div>
      </div>
      <!-- Footer Info -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.footer {
  padding-top: 50px;
  background-color: #987554; /* Fallback color if linear-gradient is not supported */
  background-size: cover;
  background-position: center;
  font-family: 'Merriweather', serif;
}

.footer-title {
  color: #D2B48C;
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-text {
  color: #D2B48C;
  font-size: 1.25rem;
}

.footer-list {
  color: #D2B48C;
}

.footer-list a {
  color: #D2B48C;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-top: 1rem;
  margin: 0;
}

.social-icons a{
  color: #D2B48C;
      font-size: 2rem;
      margin-right: 10px;
      display: inline-block;
      margin: 0 0.5rem;
}

.footer-list a:hover {
  color: #8B4513;
}

.img-fluid {
  border-radius: 5%;
}
</style>
