import emailJS from '@emailjs/browser'

const contactForm = document.getElementById("contact-form")

const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
console.log(key)
emailJS.init({
  publicKey: key
})

let template = {
  to_name: 'Andres',
  from_name: '',
  subject: 'Folium',
  message: 'teste',
  email: ''
};

const clearForm = () => {
  contactForm.reset()
}

const sendEmail = () => {
  const name = document.getElementById("name")
  const message = document.getElementById("message")
  const email = document.getElementById("email")

  template.from_name = name.value
  template.message = message.value
  template.email = email.value

  emailJS.send('service_9564nrp', 'template_w2vkrv8', template)
    .then((res) => {
      if (res.status === 200) {
        alert("Email enviado!")
        clearForm()
      }
    }),
    (error) => {
      console.log('error' + error)
      alert('Ocorreu um erro: ' + error)
    }
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  sendEmail()
});

