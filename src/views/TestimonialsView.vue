<template>
    <div class="main2">
      <div v-for=" testimonials in $store.state.testimonial" :key="testimonials.id" class="testimonial-card animate__animated animate__zoomInUp">
        <div class="testimonial-content">
          <img :src="testimonials.image" class="testimonial-image" alt="Testimonial Image">
          <div class="testimonial-details">
            <h2 class="testimonial-name">{{ testimonials.name }}</h2>
            <p class="testimonial-text">{{ testimonials.testimonial }}</p>
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
  .main2 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.testimonial-card {
  border: 1px solid #D2B48C;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  width: 300px;
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: scale(1.05);
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.testimonial-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
}

.testimonial-details {
  text-align: center;
}

.testimonial-name {
  color: #FAFBFA;
  font-size: 1.5em;
  margin-bottom: 8px;
}

.testimonial-text {
  color: #D2B48C;
}

@media (max-width: 1200px) {
  .testimonial-card {
    width: calc(33.33% - 32px);
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    width: calc(50% - 32px);
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    width: 100%;
  }
}

.testimonial-card:hover {
  transform: scale(1.05);
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.testimonial-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
}

.testimonial-details {
  text-align: center;
}

.testimonial-name {
  color: #FAFBFA;
  font-size: 1.5em;
  margin-bottom: 8px;
}

.testimonial-text {
  color: #D2B48C;
}
</style>