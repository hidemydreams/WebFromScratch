// PopUp Windows for Login And Registration

let loginBtn = document.querySelector('.nav__login');
let regBtn = document.querySelector('.nav__reg');
let loginPopUp = document.querySelector('.hero__log-popup');
let regPopUp = document.querySelector('.hero__reg-popup');
let outsidePopUp = document.querySelectorAll('.hero__popup')

loginBtn.addEventListener('click', () => {
  loginPopUp.style.display = 'block'
})

regBtn.addEventListener('click', () => {
  regPopUp.style.display = 'block'
})

window.addEventListener('click', (e) => {
  if (e.target == outsidePopUp) {
    outsidePopUp.style.display = "none";
  }
})

outsidePopUp.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  })
})


// Hero Burger





