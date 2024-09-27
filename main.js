import { sendEmail } from "./src/services/sendEmail";
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  sendEmail()
});

// close nav on link click
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarText')

const bsCollapse = new bootstrap.Collapse(menuToggle, {
  toggle: false
})

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if(bsCollapse._isShown()){
            bsCollapse.hide()
        }
    })
})

