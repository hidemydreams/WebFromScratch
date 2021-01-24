// PopUp Windows for Login And Registration

let body = document.querySelector('body')

let loginBtn = document.querySelector('.nav__login');
let regBtn = document.querySelector('.nav__reg');
let loginPopUp = document.querySelector('.log__popup');
let regPopUp = document.querySelector('.reg__popup');
let outsidePopUp = document.querySelectorAll('.popup');
let sidebarLogin = document.querySelector('.burger__log');
let sidebarReg = document.querySelector('.burger__reg');
// let showModal = document.querySelector('.show-modal')

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginPopUp.classList.add('show-modal');
        body.style.overflow = 'hidden';
    })

    sidebarLogin.addEventListener('click', (e) => {
        e.preventDefault()
        loginPopUp.classList.add('show-modal');
    })

    sidebarReg.addEventListener('click', (e) => {
        e.preventDefault()
        loginPopUp.classList.add('show-modal');
    })

    regBtn.addEventListener('click', () => {
        regPopUp.classList.add('show-modal');
        body.style.overflow = 'hidden';
    })

    outsidePopUp.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.classList.remove('show-modal');
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
    body.style.overflow = 'hidden';
    sidebar.classList.add('burger');
})

//  closeBurger.addEventListener('click', () => {
//     body.style.overflow = 'auto';
//     sidebar.classList.remove('burger');
//  })

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
        contactPop.classList.add('show-modal');
        body.style.overflow = 'hidden';

    })
    closeBtn.addEventListener('click', () => {
        contactPop.classList.remove('show-modal');
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
        body.style.overflow = 'hidden'
        modalComment.classList.add('show-modal')
    })
})

    let ratingBtn = document.querySelector('.btn_rating');
    if (ratingBtn) {
      ratingBtn.addEventListener('click', () => {
        body.style.overflow = 'auto'
        modalComment.classList.remove('show-modal')
    })
    }



//PopUp for comments
let taskBtn = document.querySelector('.link_comments');
let taskModal = document.querySelector('.comments_popup');
if (taskBtn) {
    taskBtn.addEventListener('click', (e) => {
        body.style.overflow = 'hidden'
        e.preventDefault()
        taskModal.classList.add('show-modal');
    })
}
let quitBtn = document.querySelector('.btn_quit');


//fixed top-baw with onscroll


 window.onscroll = function() {myFunction()};
 
 function myFunction() {
   if ( document.documentElement.scrollTop > 180 ) {
     document.getElementById("fixedSB").className = "fixed_side_bar";
   } else {
     document.getElementById("fixedSB").className = "";
   }
 }
 ///fixed top bar sql
 if (document.getElementById("fix_menu")) {
    window.onscroll = function() {myFunction()};
    function myFunction() {
      if ( document.documentElement.scrollTop > 120) {
        document.getElementById("fix_menu").className = "fixed_article_menu";
      } else {
        document.getElementById("fix_menu").className = "";
      }
    }
}


 //
if (quitBtn) {
  quitBtn.addEventListener('click', () => {
    body.style.overflow = 'auto'
    taskModal.classList.remove('show-modal');
})
}
    //PopUp for tasks
let tasksBtn = document.querySelector('.tasks');
let tasksModal = document.querySelector('.tasks_popup');
if (taskBtn) {
  tasksBtn.addEventListener('click', (e) => {
    body.style.overflow = 'hidden'
    e.preventDefault()
    tasksModal.classList.add('show-modal')
})
}

let taskBtnQuit = document.querySelector('.btn_tasks');
if (taskBtnQuit) {
    taskBtnQuit.addEventListener('click', () => {
        body.style.overflow = 'auto'
        tasksModal.classList.remove('show-modal')
    })

}

//PopUp for mistake
let mistakePopup = document.querySelector('.mistake');
let mistakeModal = document.querySelector('.mistake_popup');
let mistakeBtn = document.querySelector('.btn_article');
if (mistakePopup) {
  mistakePopup.addEventListener('click', (e) => {
    e.preventDefault()
    body.style.overflow = 'hidden'
    mistakeModal.classList.add('show-modal')
})
}


// Redirection for articles 

let articles = document.querySelectorAll('.articles__item');

articles.forEach((article) => {
  article.addEventListener('click', () => {
    window.location.href = 'oops.html'
  })
})

// Cards Links 

let cards = document.querySelectorAll(".topics__card");
for (let i=0; i<cards.length; i++) {
  cards[i].addEventListener('click', function(e) {
    let link = this.querySelector(".card__link");
    link.click();
  });
};