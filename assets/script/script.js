// PopUp Windows for Login And Registration
let body = document.querySelector('body')
let loginBtn = document.querySelector('.nav__login');
let regBtn = document.querySelector('.nav__reg');
let loginPopUp = document.querySelector('.log__popup');
let regPopUp = document.querySelector('.reg__popup');
let outsidePopUp = document.querySelectorAll('.popup');
let sidebarLogin = document.querySelector('.burger__log');
let sidebarReg = document.querySelector('.burger__reg');

 if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    loginPopUp.style.display = 'block';
    body.style.overflow = 'hidden';
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
    body.style.overflow = 'hidden';
  })
  
  outsidePopUp.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
      }
    })
  })
 }

// Hero Burger
let burgerBtn = document.querySelector('.burger-icon');
let sidebar = document.querySelector('.vertical__bar');
let closeBurger = document.querySelector('.close-burger');

burgerBtn.addEventListener('click', () => {
    sidebar.classList.add('burger');
})

closeBurger.addEventListener('click', () => {
    sidebar.classList.remove('burger');
})

// Search Button

let searchBtn = document.querySelector('.search-btn');
let closeSearch = document.querySelector('.search-close');
let searchForm = document.querySelector('.search-form')

searchBtn.addEventListener('click', () => {
    searchForm.classList.add('open-search');
})

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('open-search');
})

// PopUp for Contact Page

let formBtn = document.querySelector('.form__btn');
let contactPop = document.querySelector('.contact__popup');
let closeBtn = document.querySelector('.contact__close');

if (formBtn) {
    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactPop.style.display = 'block';
        body.style.overflow = 'hidden';

    })
    closeBtn.addEventListener('click', () => {
        contactPop.style.display = 'none';
        body.style.overflow = 'auto';
    })
}

// Accordion Questions

let questions = document.querySelectorAll('.accordion__item');
questions.forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('show-text')

  
          questions.forEach((item) => {
              if (item !== question) {
                  item.classList.remove('show-text')
              }
          })
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
//PopUp for rating
let starBtns = document.querySelectorAll('.star');
let modalComment = document.querySelector('.rating_popup');

starBtns.forEach((starBtn) => {
    starBtn.addEventListener('click', () => {
        modalComment.style.display = 'block';
    })
})
let ratingBtn = document.querySelector('.btn_rating');
    ratingBtn.addEventListener('click', () => {
    modalComment.style.display = 'none';
})



//PopUp for comments
let taskBtn = document.querySelector('.link_comments');
let taskModal = document.querySelector('.comments_popup');
if (taskBtn) {
    taskBtn.addEventListener('click', (e) => {
        e.preventDefault()
        taskModal.style.display = 'block';
    })
}
let quitBtn = document.querySelector('.btn_quit');
quitBtn.addEventListener('click', () => {
    taskModal.style.display = 'none';
})

//PopUp for tasks
let tasksBtn = document.querySelector('.tasks');
let tasksModal = document.querySelector('.tasks_popup');

tasksBtn.addEventListener('click', (e) => {
    e.preventDefault()
    tasksModal.style.display = 'block';
})
let taskBtnQuit = document.querySelector('.btn_tasks');
taskBtnQuit.addEventListener('click', () => {
    tasksModal.style.display = 'none';
})



//PopUp for mistake
let mistakePopup = document.querySelector('.mistake');
let mistakeModal = document.querySelector('.mistake_popup');
let mistakeBtn = document.querySelector('.btn_article');
mistakePopup.addEventListener('click', (e) => {
    e.preventDefault()
    mistakeModal.style.display = 'block';
})