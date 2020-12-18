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

outsidePopUp.forEach((modal) => {
  modal.addEventListener('click', () => {
    modal.style.display = 'none'
  })
})



