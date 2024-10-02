import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import app from '../firebase/config'
import { toggleUI } from '../scripts/systemUI'

const auth = getAuth(app)

export const signIn = () => {

const email = document.getElementById("loginEmail").value
const password = document.getElementById("loginPassword").value

const adminLink = document.getElementById("adminLink")
const btnLogout = document.getElementById("btnLogout")

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user

      if (user) {
        adminLink.style.display = "block"
        btnLogout.style.display = "block"

        const modalElement = document.getElementById('loginModal');
        const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
        modal.hide()
      }
    })
    
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      alert(errorMessage)

      return false
    })

}

export const logOut = () => {
  signOut(auth)
    .then(() => {
      window.location.href="/index.html"
    })
    .catch((error) => {
      console.log(error)
    })
}

export const userSession = async () => {
  const admin = document.getElementById("admin")
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      admin.style.display = 'block'

    } else {
      admin.style.display = 'none'
    }

  })
}