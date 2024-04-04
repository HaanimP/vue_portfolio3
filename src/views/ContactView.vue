<template>
    <div id="contact">
      <div class="container">
        <div class="row">
          <div class="contact-left">
            <h1 class="sub-title">Contact Me</h1>
            <p><i class="fa-solid fa-paper-plane"></i> haanimpietersen@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> 0714332419</p>
            <div class="social-icons">
              <a href="https://vercel.com/haanims-projects" target="_blank"><i class="fa-solid fa-square-caret-up"></i></a>
              <a href="https://github.com/HaanimP" target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href="https://za.linkedin.com/in/haanim-pietersen-172bb9264" target="_blank"><i class="fa-brands fa-linkedin animate__animated animate__bounce"></i></a>
            </div>
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52879.8279558335!2d18.519421550000008!3d-34.069789899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc415380a3a2d5%3A0xc223e448d2209d8d!2sPelikan%20Park%2C%20Cape%20Town%2C%207941!5e0!3m2!1sen!2sza!4v1705045428560!5m2!1sen!2sza" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
             
          </div>
          <div class="contact-right">
          <form v-on:submit.prevent="submitForm" action="https://formspree.io/f/xyyrzezy" method="POST" class="contact-form animate__animated animate__zoomInRight">
            <label class="form-label">
              Your Name:
              <input type="text" v-model="formData.name" class="form-input" :class="{ 'error': !formData.name && submitted }">
              <span v-if="!formData.name && submitted" class="error-message">Please fill out this field</span>
            </label>
            <label class="form-label">
              Your Email:
              <input type="email" v-model="formData.email" class="form-input" :class="{ 'error': !formData.email && submitted }">
              <span v-if="!formData.email && submitted" class="error-message">Please fill out this field</span>
            </label>
            <label class="form-label">
              Your Message:
              <textarea rows="6" v-model="formData.message" class="form-textarea"></textarea>
            </label>
            <button type="submit" class="btn btn-submit">Submit</button><br><br>
            <span v-if="submitted && (!formData.name || !formData.email)" class="error-message">Please fill out all required fields</span>
          </form>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import 'animate.css';
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        submitted: false // Added to track if the form has been submitted
      };
    },
    methods: {
      submitForm() {
        this.submitted = true; // Set submitted to true when the form is submitted
  
        // Validate the form
        if (!this.formData.name || !this.formData.email) {
          console.log('Please fill out all required fields');
          return;
        }
  
        // Handle form submission logic here
        console.log('Form submitted!', this.formData);
        // You can add additional logic, such as sending a request to your server or using Formspree
  
        // Clear the form data after submission
        this.clearForm();
      },
      clearForm() {
        // Reset form data
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
  
        // Reset submitted state
        this.submitted = false;
      }
    },
  };
  </script>
    
    <style scoped>
    #contact {
      background-image: url("https://i.ibb.co/Sd9Qkx1/conts.jpg" );
      background-size: cover;
    background-position: center;
    padding: 20px;
    height: 85vh;
    font-family: "Merriweather", serif;
      color: #000;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .row {
      display: flex;
      justify-content: space-between;
      padding: 3rem;
    }
    
    .contact-left {
      /* padding: 5rem; */
      background: transparent;
    backdrop-filter: blur(4px);
      width: 45%;
      transition: transform 0.3s;
    }

    .contact-left:hover{
      transform: scale(1.05);
    }
    
    .sub-title {
      font-size: 24px;
      margin-bottom: 20px;
    }
    
    .social-icons {
      margin-top: 20px;
    }
    
    .social-icons a {
      color: #000;
      font-size: 24px;
      margin-right: 10px;
      display: inline-block;
      margin: 0 0.5rem;
      animation: bounce var(--animate-duration) infinite;;
    }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  
  .contact-right {
    width: 45%;
  }
  
  .contact-form {
    background: transparent;
    backdrop-filter: blur(4px);
    padding: 20px;
    border-radius: 8px;
  }
  
  .form-label {
    display: block;
    margin-bottom: 10px;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #D2B48C;
    border-radius: 4px;
    background-color: #fff;
    color: #2c3e50;
  }
  
  
  .btn-submit {
    background: linear-gradient(to top, #c79081 0%, #dfa579 100%);
    color: #fff;
  }
  
  .error-message {
  color: #e74c3c;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
  }
  
  /* Add this style to highlight fields with errors */
  .error {
  border-color: #e74c3c;
  }
  
  .my-element {
  display: inline-block;
  margin: 0 0.5rem;
  
    animation: bounce; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }
  
  
  @media (max-width: 768px) {
      .row {
        flex-direction: column; /* Change flex direction to column for stacking both contact sections */
      }
  
      .contact-left,
      .contact-right {
        width: 100%; /* Make both contact sections take full width on smaller screens */
      }
  
      .contact-right {
        margin-top: 20px; /* Add some spacing between contact sections */
      }
    }
  
  </style>