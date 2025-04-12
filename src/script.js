// Simple example of interactive JavaScript functionality

document.addEventListener("DOMContentLoaded", function() {
  console.log("Welcome to Maav is Live! 🎬🌕🔥");

  // Change background color on page load
  document.body.style.backgroundColor = '#121212';

  // Add an event listener for the contact form submission
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent actual form submission for demo
      alert('Thank you for reaching out! We will get back to you soon.');
  });
});
