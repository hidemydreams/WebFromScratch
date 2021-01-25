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

if (burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    sidebar.classList.add('burger');
})

 closeBurger.addEventListener('click', () => {
    body.style.overflow = 'auto';
    sidebar.classList.remove('burger');
 })
}

// Search Button

let searchBtn = document.querySelector('.search-btn');
let closeSearch = document.querySelector('.search-close');
let searchForm = document.querySelector('.search-form');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchForm.classList.add('open-search');
})

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('open-search');
})
}

// PopUp for Contact Page

let formBtn = document.querySelector('.form__btn');
let contactPop = document.querySelector('.contact__popup');
let closeBtn = document.querySelectorAll('.contact__close');

if (formBtn) {
    let form1 = document.querySelector('.form__email');
    let form2 = document.querySelector('.form__message');
    let form3 = document.querySelector('.form__name');
    let contactEmptyPop = document.querySelector('.contact__popup-empty')


    formBtn.addEventListener('click', (e) => {
      if (form1.value === '' || form2.value === '' || form3.value === '') {
        contactEmptyPop.classList.add('show-modal');
      } else if (!form1.value.includes('@', 0)) {
        contactEmptyPop.querySelector('.contact__popup-desc').innerHTML = 'You should type in your email';
        contactEmptyPop.classList.add('show-modal');
      } else {
        e.preventDefault();
        contactEmptyPop.querySelector('.contact__popup-desc').innerHTML = `It seems like you haven't filled in one of the input fields`;
        contactPop.classList.add('show-modal');
        body.style.overflow = 'hidden';
      }
      

    })
    closeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        contactEmptyPop.classList.remove('show-modal');
        contactPop.classList.remove('show-modal');
        body.style.overflow = 'auto';
    })
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


// Redirection to OOPS.html

let logBtn = document.querySelector('.log__btn');
let registrBtn = document.querySelector('.reg__btn');

if (logBtn) {
  logBtn.addEventListener('click', () => {
    window.location.href = 'oops.html'
  })

registrBtn.addEventListener('click', () => {
    window.location.href = 'oops.html'
})
}

// Cards Links 

let cards = document.querySelectorAll(".topics__card");
for (let i=0; i<cards.length; i++) {
  cards[i].addEventListener('click', function() {
    let link = this.querySelector(".card__link");
    link.click();
  });
};

let articles = document.querySelectorAll(".article");
for (let i=0; i<cards.length; i++) {
  cards[i].addEventListener('click', function() {
    let link = this.querySelector(".article__link");
    link.click();
  });
};






// Articles Filter

const articlesItems = [
    {
      id: 1,
      title: "CSS",
      category: "css",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      link: ""
    },
    {
      id: 2,
      title: "CSS",
      category: "css",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      link: ""
    },
    {
      id: 3,
      title: "HTML",
      category: "html",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      link: ""
    },
    {
      id: 4,
      title: "Javascript",
      category: "javascript",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      link: ""
    },
    {
      id: 5,
      title: "GIT",
      category: "git",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      link: ""
    },
    {
      id: 6,
      title: "Basics",
      category: "basics",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      link: ""
    },
    {
      id: 7,
      title: "SQL",
      category: "sql",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      link: ""
    },
    {
      id: 8,
      title: "Javascript",
      category: "javascript",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      link: ""
    },
    {
      id: 9,
      title: "Basics",
      category: "basics",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      link: ""
    },
    {
      id: 10,
      title: "HTML",
      category: "html",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      link: ""
    },
  ];

  // selecting parent item
let sectionWithItems = document.querySelector('.articles__cards');
// selecting btn-container

const btnContainer = document.querySelector('.articles__btns')


if (btnContainer) {
  // load items
window.addEventListener('DOMContentLoaded', () => {
  displayArticlesItems(articlesItems)
  displayItemsBtns()
});




function displayArticlesItems(articleItems) {
  let displayItems = articleItems.map((item)=> {
    return `<div class="articles__card article">
    <h3 class="article__title">
        ${item.title}
    </h3>
    <p class="article__info">
    ${item.desc}
    </p>
    <a href="${item.link}" class="article__link read-more">Read More ></a>
</div>`
  })

  displayItems = displayItems.join('');
  sectionWithItems.innerHTML = displayItems
}

function displayItemsBtns() {

   //adding new items if there are no such
   const categories = articlesItems.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  },['all'])

  let categoryBtns = categories.map((item) => {
    return `<button type="button" class="articles__btn" data-id="${item}">
    ${item}
  </button>`
  }).join('')

  btnContainer.innerHTML = categoryBtns;
  // selecting buttons
  const filterBtns = btnContainer.querySelectorAll('.articles__btn');

  // filter items 

filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const itemCategory = articlesItems.filter((articleItem) => {
      if (articleItem.category === category) {
        return articleItem
      }
    })
    if (category === 'all') {
      displayArticlesItems(articlesItems);
    } else {
      displayArticlesItems(itemCategory);
    }
  })
})
}
}  

// NewsLetter PopUps

let newsletterBtn = document.querySelector('.newsletter__btn');
let newsletterInput = document.querySelector('.newsletter__input')
let newsletterPopup = document.querySelector('.newsletter__popup');
let newsletterClose = document.querySelectorAll('.newsletter__close');
let newsletterEmpty = document.querySelector('.newsletter__popup-empty');
let newsletterWrong = document.querySelector('.newsletter__popup-wrong');

if (newsletterBtn) {
  newsletterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputValue = newsletterInput.value;
    if (inputValue === '') {
      newsletterEmpty.classList.add('show-modal');
      body.style.overflow = 'hidden';
    }else if (!inputValue.includes('@', 0)) {
      newsletterWrong.classList.add('show-modal');
      body.style.overflow = 'hidden';
    } else {
      newsletterPopup.classList.add('show-modal');
      body.style.overflow = 'hidden';
    }
  })
  
    newsletterClose.forEach((btn) => {
      btn.addEventListener('click', () => {
        newsletterWrong.classList.remove('show-modal');
        newsletterPopup.classList.remove('show-modal');
        newsletterEmpty.classList.remove('show-modal');
        body.style.overflow = 'auto';
      })
    })
}




  
 