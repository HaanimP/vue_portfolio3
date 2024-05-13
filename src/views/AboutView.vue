<template>
  <div class="main">
    <div class="container1 animate__animated animate__slideInLeft">
      <img src="https://i.postimg.cc/pL8zc0vV/IMG-20231225-100757.png" alt="Professional Image">
      <h3>Haanim Pietersen</h3>
      <p>Aspiring Full Stack Web Developer</p>
      <p><strong>Date of birth:</strong><br> 13/08/2004</p>
      <p><strong>Languages:</strong><br>English, Afrikaans</p>
      <p><strong>Address:</strong><br>Pelican Park, Cape Town</p>
      <p><strong>Phone Number:</strong><br>071 433 2419</p>
      <p><strong>Email:</strong><br>haanimpietersen@gmail.com</p>
    </div>
    <div class="container2 animate__animated animate__slideInRight">
      <h1>About Me</h1>
      <p>Hello,<br><br>

        I am Haanim Pietersen, a dedicated student at Life Choices Coding Academy, having graduated from South Peninsula High School in 2022. With a profound passion for coding, I thrive in both independent and collaborative learning environments, driven by a strong work ethic.<br><br>

Beyond the realm of coding, I am an enthusiastic learner who delves into a myriad of subjects, cultivating a well-rounded perspective. In my leisure time, I indulge in the hobbies of reading, exploring historical narratives, and furthering my coding expertise through engaging activities aimed at website design. I hold meaningful connections in high regard, consistently seeking personal and professional growth through effective communication and collaboration.<br><br>

As I navigate through the dynamic landscape of work and learning, I eagerly anticipate the opportunity to expand my knowledge, forge enduring connections, and contribute positively to transformative change.<br><br>

Warm regards,
Haanim Pietersen
      </p>
    </div>
  </div>
</template>

<script>
import 'animate.css';
export default {
  // Your component options here
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

.main {
  display: flex;
  background-image: url("https://i.ibb.co/0YvGK5G/port-ab.jpg");
  background-size: cover;
  background-position: center;
  padding: 20px;
  height: 100%;
}

.container1 {
  width: 40%;
  color: #D2B48C;
  background: #664229; /* Dark brown background */
  padding: 30px; /* Increased padding for better spacing */
  text-align: center;
  border-radius: 10px;
  margin-right: 20px;
  font-family: 'Merriweather', serif; /* Changed font-family */
}

.container1 img {
  height: 8rem; /* Increased image size for better visibility */
  border-radius: 50%;
}

.container1 h3 {
  font-weight: bold;
  margin-top: 20px; /* Increased margin for better spacing */
}

.container1 p {
  margin: 10px 0; /* Increased margin for better spacing */
}

.container2 {
  width: 60%;
  color: #664229;
  background: #D2B48C; /* Light brown background */
  padding: 30px; /* Increased padding for better spacing */
  border-radius: 10px;
  font-family: 'Merriweather', serif; /* Changed font-family */
}

.container2 h1 {
  font-weight: bold;
  margin-bottom: 20px; /* Increased margin for better spacing */
}

@media (max-width: 767px) {
  .main {
    flex-direction: column;
    height: auto;
  }

  .container1,
  .container2 {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .main {
    flex-direction: row;
    height: auto;
  }

  .container1 {
    width: 40%;
    height: 100%;
    margin-bottom: 0;
  }

  .container2 {
    width: 60%;
    height: 100%;
  }
}

@media (min-width: 1025px) {
  .container1 {
    width: 30%;
  }

  .container2 {
    width: 70%;
  }
}
</style>