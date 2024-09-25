import { sendEmail } from "./src/services/sendEmail";
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  sendEmail()
});

