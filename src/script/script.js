let button = document.querySelectorAll('button')
button.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })

    // PopUp Windows for Login And Registration

let body = document.querySelector('body')

let loginBtn = document.querySelector('.nav__login');
let regBtn = document.querySelector('.nav__reg');
let loginPopUp = document.querySelector('.log__popup');
let regPopUp = document.querySelector('.reg__popup');
let outsidePopUp = document.querySelectorAll('.popup');
let sidebarLogin = document.querySelector('.burger__log');
let sidebarReg = document.querySelector('.burger__reg');
let allModals = document.querySelectorAll('.modal')

const showAllPopups = () => {
    outsidePopUp.forEach((popup) => {
        popup.classList.add('popup-show')
    })
}

setTimeout(showAllPopups, 5000)

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




//PopUp for tasks
let tasksBtn = document.querySelector('.tasks');
let tasksModal = document.querySelector('.tasks_popup');
if (tasksBtn) {
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
let mistakePopup = document.querySelector('.mistakes');
let mistakeModal = document.querySelector('.mistake_popup');
let mistakeBtn = document.querySelector('.btn_mistake');
let responsePopup = document.querySelector('.response_popup')
if (mistakePopup) {
    mistakePopup.addEventListener('click', (e) => {
        e.preventDefault();
        body.style.overflow = 'hidden';
        mistakeModal.classList.add('show-modal');


    })
};
if (mistakeBtn) {
    mistakeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mistakeModal.classList.remove('show-modal');
        responsePopup.classList.add('show-modal');
        body.style.overflow = 'auto';
    })

}
let responseBtn = document.querySelector('.btn_res');
if (responseBtn) {
    responseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        responsePopup.classList.remove('show-modal');
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
// Articles Filter

const articlesItems = [{
        id: 1,
        title: "Nested Media Queries",
        category: "css",
        desc: `Brief article which will give you the understanding of the power of nested mediaq queries.`,
        link: "https://www.bram.us/2021/01/11/nested-media-queries/"
    },
    {
        id: 2,
        title: "Understanding Clip Path in CSS",
        category: "css",
        desc: `The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.`,
        link: "https://ishadeed.com/article/clip-path/"
    },
    {
        id: 3,
        title: "HTML Article Tag",
        category: "html",
        desc: `HTML element which represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable`,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"
    },
    {
        id: 4,
        title: "Event Delegations",
        category: "javascript",
        desc: `What is event delegation in javascript?`,
        link: "https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983"
    },
    {
        id: 5,
        title: "GIT Hacks",
        category: "git",
        desc: `15 Git Hacks to Save your Life as a Developer.`,
        link: "https://medium.com/@gitship/15-git-hacks-to-save-your-life-as-a-developer-aa8808846dbb"
    },
    {
        id: 6,
        title: "What is Computer Science?",
        category: "basics",
        desc: `What is computer science, really? Here’s a quick guide on the basics of computer science, plus how to get started learning more!`,
        link: "https://www.uopeople.edu/blog/the-basics-of-computer-science-how-to-get-started/#:~:text=Computer%20science%20is%20the%20study,everywhere%20in%20our%20everyday%20lives."
    },
    {
        id: 7,
        title: "Top SQL Articles",
        category: "sql",
        desc: `List of Top SQL Articles Published in 2019 `,
        link: "https://learnsql.com/blog/19-best-sql-articles-for-beginners-published-in-2019/"
    },
    {
        id: 8,
        title: "Javascript functions",
        category: "javascript",
        desc: `Javascript function closures`,
        link: "https://www.w3schools.com/js/js_function_closures.asp"
    },
    {
        id: 9,
        title: "Basics to learn coding",
        category: "basics",
        desc: `What is Computer Programming? Basics to Learn Coding`,
        link: "https://www.guru99.com/computer-programming-tutorial.html"
    },
    {
        id: 10,
        title: "HTML Semantics",
        category: "html",
        desc: `Short article about HTML semantic tags and how important is using them.`,
        link: "https://www.w3schools.com/html/html5_semantic_elements.asp"
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
        articlesInnerLink()
    });
};



function displayArticlesItems(articleItems) {
    let displayItems = articleItems.map((item) => {
        return `<div class="articles__card article">
    <h3 class="article__title">
        ${item.title}
    </h3>
    <p class="article__info">
    ${item.desc}
    </p>
    <a href="${item.link}" target="_blank" class="article__link read-more">Read More ></a>
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
    }, ['all'])

    let categoryBtns = categories.map((item) => {
        return `<button type="button" class="btn articles__btn" data-id="${item}">
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
        } else if (!inputValue.includes('@', 0)) {
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

// Cards Links 

let cards = document.querySelectorAll(".topics__card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        let link = this.querySelector(".card__link");
        link.click();
    });
};

articlesInnerLink()

function articlesInnerLink() {
    let articles = document.querySelectorAll(".article");
    for (let i = 0; i < articles.length; i++) {
        articles[i].addEventListener('click', function() {
            let link = this.querySelector(".article__link");
            link.click();
        });
    };
}

///fixed top bar sql
if (document.getElementById("fix_menu")) {
    window.onscroll = function() { myFunction() };

    function myFunction() {
        if (document.documentElement.scrollTop > 120) {
            document.getElementById("fix_menu").className = "fixed_article_menu";
        } else {
            document.getElementById("fix_menu").className = "";
        }
    }
}
// Preloader 

preloader()

function preloader() {
    let preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hide-preloader');
    })
}


// Envelope Copy to ClipBoard and PopUp

let envelope = document.querySelector('.envelope');
let envelopePop = document.querySelector('.envelope__popup');


envelope.addEventListener('click', () => {
    envelopePop.classList.add('active');
    copyToClipboard()
})

envelopePop.addEventListener('animationend', ()=> {
    envelopePop.classList.remove('active');
})

function copyToClipboard() {
    const textarea = document.createElement('textarea')
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.value = 'webfromscratch@gmail.com'
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}


// Search 

let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
    let val = searchInput.value.trim('');
    let searchItems = document.querySelectorAll('.search__result');

    if (val != '') {
        searchItems.forEach((elem) => {
            if (elem.innerText.search(RegExp(val,"gi")) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            } else {
                elem.classList.remove('hide');
                let string = elem.innerText;
                elem.innerHTML = makeMarkedLetter(string,elem.innerText.search(RegExp(val,"gi")), val.length )
            }
        })
    } else {
        searchItems.forEach((elem) => {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        })
    }
} )

function makeMarkedLetter(str,pos,len) {
    return `${str.slice(0, pos)}<span class="red-mark">${str.slice(pos, pos + len)}</span>${str.slice(pos+len)}`
}

// Comments Block 

// Like

likeComments()

function likeComments() {
    let likeBtn = document.querySelectorAll('.comment__action i');
likeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.dataset.id === 'like') {
            let likesSum = +e.currentTarget.nextElementSibling.innerText;
            likesSum += 1
            e.currentTarget.nextElementSibling.innerText = likesSum;
        } else {
            let likesSum = +e.currentTarget.nextElementSibling.innerText;
            if (likesSum !== 0) {
                likesSum -= 1
                e.currentTarget.nextElementSibling.innerText = likesSum;
            }
        }
    })
})
}

// Add Comment 

let sendCommentBtn = document.querySelector('.comments__btn');
let commentTextarea = document.querySelector('.comments__textarea');
let commentsSection = document.querySelector('.comments__items');

if (sendCommentBtn) {
    sendCommentBtn.addEventListener('click', () => {
        if (commentTextarea.value !== '') {
            let newComment = document.createElement('div')
            newComment.classList.add('comment')
            newComment.innerHTML = `
            <div class="comment__avatar">
    
            </div>
            <div class="comment__content">
                <div class="comment__name">
                    <span class="comment__initial">Guest</span>
                    <span class="comment__dot"></span>
                    <span class="comment__time">2 days ago</span>
                </div>
                <div class="comment__text">
                    <p>${commentTextarea.value}</p>
                </div>
                <div class="comment__actions">
                    <p class="comment__action">
                        <i data-id="like" class="far fa-thumbs-up"></i>
                    <span class="comment__like-counter">0</span>
                    </p>
                    <div class="comment__action">
                        <i data-id="dislike" class="far fa-thumbs-down"></i>               
                    <span class="comment__dislike-counter">0</span>
                    </div>
                    <div class="comment__reply">
                        Reply
                    </div>
                </div>
            </div>`
            commentsSection.insertBefore(newComment, commentsSection.firstChild)
            commentTextarea.value = ''
        }
        likeComments()
    })
}



// Show Topic Side Nav 

let showBtn = document.querySelector('.nav__showmenu');
let sideNav = document.querySelector('.nav_sql_menu');
let closeNav = document.querySelector('.nav__back')

if (showBtn) {
showBtn.addEventListener('click', ()=> {
    sideNav.classList.add('shown');
})
}

if (closeNav) {
    closeNav.addEventListener('click', ()=> {
        sideNav.classList.remove('shown');
        console.log('ok')
})}


// Scroll Bar 

window.addEventListener('scroll', () => {
    scrollProgress()
})



function scrollProgress() {
    let indicator = document.querySelector('.scroll__indicator');
    if (indicator) {
    let scrollHeight = document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollHeight / height) * 100;
    indicator.style.width = scrolled + '%';
    }
}

