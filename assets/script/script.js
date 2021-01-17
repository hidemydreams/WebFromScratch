// PopUp Windows for Login And Registration

let loginBtn = document.querySelector('.nav__login');
let regBtn = document.querySelector('.nav__reg');
let loginPopUp = document.querySelector('.log__popup');
let regPopUp = document.querySelector('.reg__popup');
let outsidePopUp = document.querySelectorAll('.popup')
let sidebarLogin = document.querySelector('.burger__log')
let sidebarReg = document.querySelector('.burger__reg')

loginBtn.addEventListener('click', () => {
  loginPopUp.style.display = 'block'
})

sidebarLogin.addEventListener('click', (e) => {
  e.preventDefault()
  loginPopUp.style.display = 'block'
})

sidebarReg.addEventListener('click', (e) => {
  e.preventDefault()
  regPopUp.style.display = 'block'
})

regBtn.addEventListener('click', () => {
  regPopUp.style.display = 'block'
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

burgerBtn.addEventListener('click', () => {
  sidebar.classList.toggle('burger');
})

// Search Button

let searchBtn = document.querySelector('.search-btn');
let closeSearch = document.querySelector('.search-close');

searchBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open-search');
})

closeSearch.addEventListener('click', () => {
  sidebar.classList.toggle('open-search');
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

// Accordion Questions

// let btns = document.querySelectorAll('.toggle-btn');

// btns.forEach((btn) => {
//   btn.addEventListener('click',(e) => {
//     let question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle('show-text')
//   })
// })

let questions = document.querySelectorAll('.accordion__item');

questions.forEach((question) => {
  // console.log(question)
  let btn = question.querySelector('.toggle-btn');
  // console.log(btn)
  btn.addEventListener('click', () => {


    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text')
      }
    })



    question.classList.toggle('show-text')
  })
})

// Tabs For FullPage Registration

let signUpBtn = document.querySelector('.sign-up__tab');
let logInBtn = document.querySelector('.login__tab');
let loginContent = document.querySelector('.login__form');
let signUpContent = document.querySelector('.signup__form');

if (signUpContent) {
  signUpBtn.addEventListener('click', () => {
    logInBtn.style.backgroundColor = '#52aee2';
    signUpBtn.style.backgroundColor = '#269adb';
    loginContent.style.display = 'none';
    signUpContent.style.display = 'flex';
  })
  
  logInBtn.addEventListener('click', () => {
    logInBtn.style.backgroundColor = '#269adb';
    signUpBtn.style.backgroundColor = '#52aee2';
    loginContent.style.display = 'flex';
    signUpContent.style.display = 'none';
  })
  
}

//fixed side_bar with scroll
// $(window).scroll(function(){
//   if ($(window).scrollTop() > 1) {
//       $('.side_bar').addClass('fixed_side_bar');
//   }
//   else {
//       $('.side_bar').removeClass('fixed_side_bar');
//   }
// });





window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.scrollTop > 200 ) {
    document.getElementById("fixedSB").className = "";
    console.log('hiiii');

  } else {
    document.getElementById("fixedSB").className = "fixed_side_bar";
  }
}

