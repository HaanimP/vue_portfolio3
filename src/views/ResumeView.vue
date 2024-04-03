<template>
    <div>
      <h2 class="edu">Education</h2>
      <div id="carouselExampleCaptions" class="carousel slide">
        <!-- Use v-for to iterate through education data -->
        <div v-for="(item, index) in $store.state.Resume" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
          <img :src="item.imageSrc" class="d-block w-100 img-fluid rounded" :alt="item.school" />
          <div class="carousel-caption text-dark">
            <h5>{{ item.school }}</h5>
            <h7>{{ item.year }}</h7>
            <p>{{ item.description }}</p>
          </div>
        </div>
        <!-- Carousel controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br>
  
      <div class="skills-section animate__animated animate__slideInUp">
        <h2 class="skills">Skills</h2>
        <!-- Use v-for to iterate through skills data -->
        <div v-for="(skill, index) in $store.state.Skills" :key="index" class="skill-item">
          <h4 class="html">{{ skill.name }}</h4>
          <div class="progress" role="progressbar" :aria-valuenow="skill.percentage" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" :style="{ 'width': skill.percentage + '%' }">{{ skill.percentage }}%</div>
          </div>
          <p>{{ skill.description }}</p>
        </div>
        <br>
      </div>
  
      <div class="cvbtn animate__animated animate__slideInUp">
        <a href="https://pdf.ac/1UuS9D" download class="btn">Download CV </a>
      </div>
    </div>
  </template>
  
  <script>
import 'animate.css';
export default {
 computed:{
    fetchResume(){
            this.$store.dispatch('fetchResume')
        },
        fetchSkills(){
            this.$store.dispatch('fetchSkills')
        }
 },
 mounted() {
        this.fetchResume
        this.fetchSkills
      },
};
</script>

  
  <style scoped>
#carouselExampleCaptions {
  width: 500px;
  height: 500px;
  margin: auto;
}

.edu {
    color: #D2B48C;
    font-weight: 800;
}

.skills {
    color: #D2B48C;
    font-weight: 800;
}

.carousel-inner {
  border-radius: 10px;
  overflow: hidden;
}

.carousel-item img {
  object-fit: cover;
  width: 500px;
  height: 500px;
}

.carousel-caption {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
}

.carousel-control-prev,
.carousel-control-next {
  background-color: transparent;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
}

.text-dark {
  color: #000 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.skills-section {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.skill-item {
    margin-bottom: 30px;
}

.skill-item p {
    color: #EEECDA;
}

.progress {
    height: 20px;
    margin: 0 20px 10px 20px; /* Added margin on both left and right sides */
}

.custom-progress-bar {
  color: black;
  font-weight: 500;
}

.progress-bar {
    background-color: #4CAF50; /* Green color */
    text-align: center;
    line-height: 20px; /* Center the text vertically */
    color: white; /* White text color */
    border-radius: 5px; /* Rounded corners */
}

.skill-description {
    margin: 0 20px; /* Added margin on both left and right sides */
}

.html {
    font-weight: 700;
    color:#FAFBFA;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    color: #D2B48C;
    background-color: #987554;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10%;
  }

@media (max-width: 768px) {
  .carousel-item img {
    max-height: 900px; 
  }
}

@media (max-width: 576px) {
  .carousel-item img {
    width: 100px;
    height: 500px; 
  }
}


</style>