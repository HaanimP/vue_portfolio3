<template>
    <div class="body">
      <h1 class="edu">Education</h1>
      <div class="container">
        <div v-for="(item, index) in $store.state.Resume" :key="index" class="card booking-card v-2 mt-2 mb-4 rounded-bottom">
          <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img :src="item.imageSrc" class="img-fluid">
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title font-weight-bold"><a>{{ item.school }}</a></h4>
            <ul class="list-unstyled list-inline mb-2">
              <li class="list-inline-item me-0"><i class="fa fa-star fa-xs"> </i></li>
              <li class="list-inline-item me-0"><i class="fa fa-star fa-xs"></i></li>
              <li class="list-inline-item me-0"><i class="fa fa-star fa-xs"></i></li>
              <li class="list-inline-item me-0"><i class="fa fa-star fa-xs"></i></li>
              <li class="list-inline-item"><i class="fa fa-star-half-alt fa-xs"></i></li>
            </ul>
            <hr class="my-4">
            <p class="card-text">{{ item.year }}</p>
            <p class="card-text">{{ item.degree }}</p>
            <hr class="my-4">
            <p class="card-text">{{ item.description }}</p>
          </div>
        </div>
      </div><br>

      <h1 class="work">Work Experience</h1>
    <div class="container" style="margin-top: 50px;">
      <div class="row">
        <div class="col-md-3">
          <div class="card-sl">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://i.ibb.co/kqH69xm/port-lc.jpg" class="card-img-top" alt="lifechoices">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Life Choices Studio</h5><br>
                  <h7 class="card-title">INTERN</h7>
                  <hr class="my-4">
                  <p class="card-text">Building upon my foundational expertise acquired during my time at the academy, I am currently engaged in an enriching internship where I am further honing my skills in Software Engineering. This hands-on experience post-graduation from the coding course not only allows me to apply my existing knowledge but also exposes me to new challenges and technologies, contributing significantly to my professional growth and development.</p>
                  <hr class="my-4">
                  <p class="card-text">April 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <h1 class="skills">Skills</h1>
      <h3 class="t-skills">Technical Skills</h3>
      <div class="icons">
        <p><i class="fa-brands fa-html5"></i><br>HTML</p>
        <p><i class="fa-brands fa-css3-alt"></i><br>CSS</p>
        <p><i class="fa-brands fa-js"></i><br>JavaScript</p>
        <p><i class="fa-brands fa-node"></i><br>Node JS</p>
        <p><i class="fa-solid fa-database"></i><br>MySql</p>
        <p><i class="fa-brands fa-vuejs"></i><br>Vue JS</p>
        <p><i class="fa-brands fa-github"></i><br>Github</p>
        <p><i class="fa-brands fa-figma"></i><br>Figma</p>
        <p><i class="fa-brands fa-linux"></i><br>Linux</p>
        <p><i class="fa-brands fa-python"></i><br>Python</p>
        <p><i class="fa-solid fa-c"></i><br>C++</p>
      </div><br>
      <h3 class="t-skills">Soft Skills</h3>
      <div class="icons">
        <p><i class="fa-solid fa-tty"></i><br>Communication Skills</p>
        <p><i class="fa-regular fa-face-smile"></i><br>Emotional Intelligence</p>
        <p><i class="fa-solid fa-calculator"></i><br>Problem Solving Skills</p>
        <p><i class="fa-solid fa-user-plus"></i><br>Teamwork and Collaboration</p>
        <p><i class="fa-solid fa-business-time"></i><br>Time Management</p>
        <p><i class="fa-solid fa-people-group"></i><br>Leadership Skills</p>
      </div><br>

      <div class="cvbtn animate__animated animate__slideInUp">
  <a href="https://drive.google.com/file/d/13l3bGxoF0i4mmt4XhrAwybvC_NGeNDsZ/view?usp=drive_link" class="btn" target="_blank" download="Resume">View my CV</a>
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
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
  
  .body{
    /* background: linear-gradient(to top, #E6B980 0%, #EACDA3 100%); */
    background-image: url("https://i.ibb.co/cwLK998/res.jpg");
    font-family: 'Merriweather', serif;
    height: 100%;
  }
  
  .edu {
    color: #000;
    font-weight: 600;
    padding: 2rem;
  }

  .work {
    color: #000;
    font-weight: 600;
  }

  .skills {
    color: #000;
    font-weight: 600;
  }

  .t-skills {
    color: #000;
    font-weight: 600;
    padding: 1rem;
  }
  
  .container {
    display: flex;
    flex-direction: row; 
    gap: 20px;
    padding: 1rem;
  }
  
  .card.booking-card.v-2 {
    background: transparent;
    backdrop-filter: blur(4px);
    width: 900px;
  }
  
  .card.booking-card.v-2 .fa {
    color: #f7aa00;
  }
  
  .card.booking-card.v-2 .card-body .card-text {
    color: #000;
  }
  
  .card.card.booking-card.v-2 .chip {
    background-color: #87e5da;
  }
  
  .card.booking-card.v-2 .card-body hr {
    border-top: 1px solid #f7aa00;
  }
  
  .booking-card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .booking-card:hover {
    transform: scale(1.05);
  }
  
  .booking-card .card-body {
    padding: 1.25rem;
  }

  .icons {
  display: grid; /* Use grid layout for better alignment */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adjust column width */
  gap: 20px;
  justify-content: center; 
}

.icons p {
  text-align: center; 
  margin: 0;
  color: #000; 
}

.icons i {
  font-size: 5rem; 
  color: #987554; 
  margin-bottom: 0.5rem; 
}
  
  .img-fluid {
    padding: 1rem;
    width: 150px;
    height: 150px;
  }

  .card-title {
    color: #000;
    font-weight: bold;
  }
  
  .card-text {
    color: #6c757d;
  }

  .cvbtn {
  display: flex; /* Use flexbox for alignment */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100px; /* Keep the specified height */
  width: 100%; /* Full width to ensure centering takes full effect */
}
  
.btn {
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  color: #FFF;
  background-color: #987554; /* Neutral brown shade */
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: none;
  font-weight: bold;
}

.btn:hover {
  background-color: #D2B48C; /* Lighter shade for hover effect */
  color: #000;
}

  .card-sl {
    background: transparent;
    backdrop-filter: blur(4px);
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 1200px;
    height: 360px;
    transition: transform 0.3s;
  }

  .card-sl:hover {
    transform: scale(1.05);
  }

.card-img-top {
  border-radius: 8px 0 0 8px;
  height: 360px;
}

.card-body {
  padding: 1.25rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  color: #000;
}

@media only screen and (max-width: 600px) {
    .container {
      flex-direction: column; /* Change to column layout for smaller screens */
    }

    .card.booking-card.v-2 {
      width: 100%; /* Make the cards full width on smaller screens */
    }

    .icons {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Adjust icon grid columns */
    }

    .card-sl {
      width: 100% !important; /* Make the work experience card full width on smaller screens */
      height: auto !important; /* Adjust height to fit content */
    }

    .card-img-top {
      border-radius: 8px; /* Adjust border radius for smaller screens */
      width: 100% !important; /* Make image full width */
      height: auto !important; /* Adjust height to fit content */
    }

    .icons {
      gap: 10px; /* Adjust the gap value as needed */
      margin-left: 6px;
      margin-right: 6px;
    }

    .skills {
      margin-top: auto  !important;;
    }

    .cvbtn {
    margin-top: 20px; /* Adds top margin on mobile if needed */
  }
  }


     

    @media only screen and (max-width: 992px) {
  .card-sl {
    flex-direction: column; /* Ensures vertical stacking */
    align-items: center; /* Centers content horizontally */
    width: 700px; /* Takes full width of its container */
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
  }

  .card-sl .row {
    flex-direction: column; /* Changes row direction to column */
  }

  .card-sl .col-md-4, .card-sl .col-md-8 {
    width: 100%; /* Full width to accommodate single-column layout */
  }

  .card-img-top {
    width: 100%; /* Full width of its new container */
    height: auto; /* Adjust height automatically to maintain aspect ratio */
    margin-bottom: 20px; /* Adds space between the image and text content */
  }

  .card-body {
    text-align: center; /* Center-aligns the text */
  }

  .skills {
      margin-top: 90%;
    }

    .icons {
      gap: 10px; /* Adjust the gap value as needed */
      margin-left: 6px;
      margin-right: 6px;
    }

    .cvbtn {
    margin-top: 20px; /* Adds top margin on mobile if needed */
  }
}
  
  </style>