<template>
  <div class="home">
    <div class="row" v-if="HomeArray && HomeArray.length > 0">
      <div class="col-12 col-md-6">
        <div class="webDeveloperTitle animate__animated animate__backInLeft">
          <h1>{{ HomeArray[0].title }}</h1>
        </div>
        <div class="greeting animate__animated animate__backInUp">
          <h1>{{ HomeArray[0].greeting.text }} <span class="nameSpan">{{ HomeArray[0].greeting.name }}</span></h1>
          <router-link to="/contact" class="contact-button">{{ HomeArray[0].contactButton }}</router-link>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="imageContainer animate__animated animate__backInRight">
          <div class="professionalImage">
            <img :src="HomeArray[0].imageSrc" alt="Professional Image">
          </div>
          <div class="additionalImage">
            <img src="https://i.ibb.co/WxTf0Dp/port-home.jpg" alt="Additional Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: 'HomeView',
  components: {},
  computed: {
    HomeArray() {
      return this.$store.state.home || [];
    }
  },
  mounted() {
    this.$store.dispatch('fetchHome');
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

.home {
  display: flex;
  font-family: 'Merriweather', serif;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://i.ibb.co/MPv0pYC/port-wall.jpg");
  background-size: cover;
  background-position: center;
  color: #D2B48C;
}

.row {
  display: flex;
  width: 100%;
}

.col-12 {
  flex: 0 0 100%;
}

.col-md-6 {
  flex: 0 0 50%;
}

.webDeveloperTitle {
  text-align: left;
  padding-left: 20px;
}

.webDeveloperTitle h1 {
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 10px;
  color: #D2B48C;
}

.imageContainer {
  display: flex;
}

.professionalImage,
.additionalImage {
  flex: 1;
  text-align: center;
}

.professionalImage img,
.additionalImage img {
  width: 400px;
  height: 400px;
  border-radius: 5%;
}

.greeting {
  text-align: right;
  padding-right: 20px;
}

.greeting h1 {
  color: #A88B63;
  font-weight: 600;
  margin: 0;
}

.nameSpan {
  color: #BFAE94;
  font-weight: bold;
}

.contact-button {
  display: inline-block;
  background-color: #A88B63;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #664229;
}

@media only screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }

  .col-12, .col-md-6 {
    flex: 1;
    width: 100%;
  }

  .greeting {
    text-align: left;
    margin-right: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  .professionalImage, .additionalImage {
    margin-top: 5%;
  }

  .greeting h1 {
    color: #D2B48C;
    font-weight: bolder;
  }

  .additionalImage {
    display: none;
  }

  .professionalImage img {
    width: 100%; 
    height: auto; 
    border-radius: 5%; 
  }
}

@media only screen and (max-width: 992px) {
  .row {
    flex-direction: column;
  }

  .col-12, .col-md-6 {
    flex: 1;
    width: 100%;
  }

  .greeting {
    text-align: left;
    margin-right: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  .professionalImage, .additionalImage {
    margin-top: 5%;
  }

  .greeting h1 {
    color: #D2B48C;
    font-weight: bolder;
  }

  .additionalImage {
    display: none;
  }

  .professionalImage img {
    width: 700px; 
    height: 700px; 
    border-radius: 5%; 
  }
}
</style>