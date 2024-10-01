import { logOut, signIn, userSession } from "./src/services/auth";
import { sendEmail } from "./src/services/sendEmail";
import { toggleUI } from "./src/scripts/systemUI";

const contactForm = document.getElementById("contact-form")
const loginForm = document.getElementById("loginForm")

const adminLink = document.getElementById("adminLink")
const mainLink = document.getElementById("mainLink")
const btnLogout = document.getElementById("btnLogout")

adminLink.addEventListener("click", (e) => {
  const uiID = e.target.parentElement.id
  toggleUI(uiID)
})

mainLink.addEventListener("click", (e) => {
  const uiID = e.target.parentElement.id
  console.log(uiID)
  toggleUI(uiID)
})

contactForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  sendEmail()
})

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  signIn()
})

loginForm.addEventListener('keypress', (e) => {
  // e.preventDefault()

  if (e.key === 'Enter') {
    
    signIn()
  }
})

// signOut
btnLogout.addEventListener('click', () => {
  logOut()
})

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

userSession()
