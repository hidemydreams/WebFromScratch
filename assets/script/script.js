// PopUp Windows for Login And Registration

let loginBtn = document.querySelector('.nav__login');
let regBtn = document.querySelector('.nav__reg');
let loginPopUp = document.querySelector('.log__popup');
let regPopUp = document.querySelector('.reg__popup');
let outsidePopUp = document.querySelectorAll('.popup')

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


let burgerBtn = document.querySelector('.burger-icon');
let sidebar = document.querySelector('.vertical__bar');
let icons = document.querySelector('.vertical__icons');
let verticalContent = document.querySelector('.vertical__menu');
let burgerMenu = document.querySelector('.burger__list');
let registration = document.querySelector('.registration');

burgerBtn.addEventListener('click', () => {
  sidebar.classList.toggle('burger');
  icons.classList.toggle('burger');
  verticalContent.classList.toggle('burger');
  burgerMenu.classList.toggle('burger');
  registration.classList.toggle('burger');
})


// PopUp for Contact Page

let formBtn = document.querySelector('.form__btn');
let contactPop = document.querySelector('.contact__popup');
let closeBtn = document.querySelector('.contact__close');

if (formBtn) {
formBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contactPop.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  contactPop.style.display = 'none';
})
}





