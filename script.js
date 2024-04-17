const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


 const bang = document.querySelector(".bang");

window.addEventListener("scroll",() => {
    if (window.pageYOffset > 100){
        bang.classList.add("active");
    } else {
        bang.classList.remove("active");
    }
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQohRuArW5sO2w9UrwNF1xzBl03JrgRq-yg5DDC2EHIqnX5-iqEFpOyAgp1jGMQ4rYzQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function)(){
              msg.innerHTML = ""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


 




