<template>
  <div class="team-boxed">
    <div class="container">
      <div class="intro">
        <h2 class="text-center">Testimonials</h2>
      </div>
      <div class="row people">
        <div v-for="testimonial in $store.state.testimonial" :key="testimonial.id" class="col-md-6 col-lg-4 item">
          <div class="box">
            <img class="rounded-circle testimonial-image" :src="testimonial.image">
            <hr class="my-4">
            <h3 class="name">{{ testimonial.name }}</h3>
            <p class="title">{{ testimonial.title }}</p>
            <hr class="my-4">
            <p class="description">{{ testimonial.testimonial }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {
  // data() {
  //   return {
  //     testimonialData: testimonialData,
  //   };
  // },
  computed:{
      fetchTestimonial(){
          this.$store.dispatch('fetchTestimonial')
      }
  },
  mounted(){
      this.fetchTestimonial
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

.team-boxed {
  color: #313437;
  background-image: url("https://i.ibb.co/t2z7CWk/testi.jpg" );
  background-size: cover;
  background-position: center;
  padding: 20px;
  height: 260vh;
  font-family: 'Merriweather', serif;
  /* padding: 20px 20px; */
}

.team-boxed h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: #fff;
}

.team-boxed .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

/* .team-boxed .people {
  padding: 50px 0;
} */

.team-boxed .item {
  text-align: center;
}

.team-boxed .item .box {
  text-align: center;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
}

.team-boxed .item .name {
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
  color: #333;
}

.team-boxed .item .title {
  text-transform: uppercase;
  font-weight: bold;
  color: #888;
  font-size: 12px;
}

.team-boxed .item .description {
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 20px;
  color: #666;
}

.team-boxed .item img.testimonial-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
}

.team-boxed .social {
  margin-top: 15px;
}

.team-boxed .social .social-link {
  color: #888;
  margin: 0 5px;
}

.team-boxed .social .social-link:hover {
  color: #555;
}
</style>