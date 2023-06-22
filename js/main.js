
// ABOUT BUTTON SETTINGS
const aboutButton = document.querySelector('.about__button')
aboutButton.addEventListener('click', () => {
    aboutButton.classList.toggle('press')
})

// SCROLL SETTINGS
const scrollFun = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add('scroll')
    } else {
        document.body.classList.remove('scroll')
    }
}

window.onscroll = () => scrollFun()

// MOBILE MENU SETTINGS
const toggleMenu = ()=> {
    const linksContainer = document.getElementById('nabvarLinksContainer')
    const menuIcon = document.getElementById('menuIcon')
    
    if(window.matchMedia('(max-width: 768px)').matches) {
        
        if(linksContainer.style.display === 'none') {
            linksContainer.style.display = 'flex'
            menuIcon.classList.remove('fa-bars')
            menuIcon.classList.add('fa-times')
            document.body.style.overflow = 'hidden'
        } else {
            linksContainer.style.display = 'none'
            menuIcon.classList.remove('fa-times')
            menuIcon.classList.add('fa-bars')
            document.body.style.overflow = 'scroll'
        }
    }
}

const links = document.querySelectorAll('.navbar__list a')
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', toggleMenu)
}

// WORK BUTTON SETTINGS
const cards = [
    {
        id: '0',
        img: './assets/tonic.png',
        alt: 'Tonic',
        name: 'Tonic',
        feature: 'CANOPY',
        feature2: 'Back End Dev',
        feature3: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
        language: 'html',
        language2: 'Ruby on rails',
        language3: 'css',
        language4: 'javascript',
        framework: 'Bootstrap'
    },
    {
        id: '1',
        img: './assets/multi.png',
        alt: 'Multi-Post Stories',
        name: 'Multi-Post Stories',
        feature: 'FACEBOOK',
        feature2: 'Full Stack Dev',
        feature3: '2015',
        description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        language: 'html',
        language2: 'Ruby on rails',
        language3: 'css',
        language4: 'javascript',
        framework: 'Bootstrap'
    },
    {
        id: '2',
        img: './assets/facebook.png',
        alt: 'Facebook 360',
        name: 'Facebook 360',
        feature: 'FACEBOOK',
        feature2: 'Full Stack Dev',
        feature3: '2015',
        description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
        language: 'html',
        language2: 'Ruby on rails',
        language3: 'css',
        language4: 'javascript',
        framework: 'Bootstrap'
    },
    {
        id: '3',
        img: './assets/uber.png',
        alt: 'Uber Navigation',
        name: 'Uber Navigation',
        feature: 'Uber',
        feature2: 'Lead Developer',
        feature3: '2018',
        description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        language: 'html',
        language2: 'Ruby on rails',
        language3: 'css',
        language4: 'javascript',
        framework: 'Bootstrap'
    }
]

// PRINT THE CARDS
const printCard = () => {
    const cardContainer = document.querySelector('.work__section')
    cards.forEach( card => {
        const article = document.createElement('article')
        article.classList.add('work__description')
        article.innerHTML =
        `
        <figure class="work__image__container multi">
        <img src="${card.img}" alt="${card.alt}" class="work__image"> 
        </figure>
        <div class="work__features__container">
        <h2 class="work__title">${card.name}</h2>
        <ul class="work__features">
            <li class="work__features__item">${card.feature}</li>
            <li class="work__features__item">${card.feature2}</li>
            <li class="work__features__item">${card.feature3}</li>
        </ul>
        <p class="work__paragraph">${card.description}</p>
        <ul class="work__list__container ruby">
            <li class="work__language__item">${card.language}</li>
            <li class="work__language__item">${card.language2}</li>
            <li class="work__language__item">${card.language3}</li>
            <li class="work__language__item">${card.language4}</li>
        </ul>
        <button id="${card.id}" class="work__button">See Project</button>
        </div>
        `
        cardContainer.appendChild(article)
    })
}
printCard()

// WINDOW POPUP SETTINGS
const popupWindow = document.getElementById('popupWindow')
const popupDescription = document.querySelector('.popup__description')
const navbarSection = document.querySelector('.navbar__section')
const workSection = document.querySelector('.work__section')
const workBtn = document.querySelectorAll('.work__button')

const createPopup = (ind) => {
    const work = cards[ind]
    const {
        img,
        alt,
        name,
        feature,
        feature2,
        feature3,
        description,
        language,
        language2,
        language3,
        language4,
        framework
    } = work

    const article = document.createElement('article')
    article.classList.add('popup__description')
    article.innerHTML = 
    `
    <header class="popup__header">
        <h2 class="popup__title">${name}</h2> 
        <i onclick="" class="fa-solid fa-times popup__xmark"></i>
    </header>
    <ul class="popup__features">
        <li class="popup__features__item">${feature}</li>
        <li class="popup__features__item">${feature2}</li>
        <li class="popup__features__item">${feature3}</li>
    </ul>
    <figure class="popup__image__container multi">
        <img src="${img}" alt="${alt}" class="popup__image"> 
    </figure>
    <div class="popup__features__container">
        <p class="popup__paragraph">${description}</p>
        <div class="popup__bottom__container">
            <ul class="popup__list__container ruby">
                <li class="popup__language__item">${language}</li>
                <li class="popup__language__item">${language2}</li>
                <li class="popup__language__item">${language3}</li>
                <li class="popup__language__item">${language4}</li>
                <li class="popup__language__item">${framework}</li>
            </ul>
            <div class="about__btn__container">
                <button class="popup__button">
                    See live
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
                <button class="popup__button">
                    See source
                    <i class="fa-brands fa-github"></i>
                </button>
            </div>
        </div>    
    </div>
    `
    popupWindow.appendChild(article)

    document.body.style.overflow = 'hidden'
    
    const closePopup = document.querySelector('.popup__xmark')
    closePopup.addEventListener('click', ()=> {
        workSection.classList.remove('blurEffect')
        navbarSection.style.display = 'flex'
        document.body.style.overflow = 'scroll'
        popupWindow.removeChild(article)
        workBtn.forEach((btn) => {
            btn.classList.remove('press')
        })
    })
}

// WORK BUTTONS    
workBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        btn.classList.toggle('press')
        const ind = e.target.id
        createPopup(ind)
        workSection.classList.add('blurEffect')
        navbarSection.style.display = 'none'
    })
})

// CONTACT FORM
const form = document.getElementById('contact__form')
const email = document.getElementById('email')
const emailError = document.querySelector('#email + span.emailError')
const nameInpt = document.getElementById('name')
const nameError = document.querySelector('#name + span.nameError')

const showMailError = ()=> {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Enter a valid Email please.'
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email has a min of ${email.minLength} characters, you entered ${email.value.length}.`
    }
}

const showNameError = ()=> {
    if (nameInpt.validity.valueMissing) {
        nameError.textContent = 'Enter a valid Name please.'
    } else if (nameInpt.validity.tooShort) {
        nameError.textContent = `Email has a min of ${nameInpt.minLength} characters.`
    }
}

email.addEventListener('input', ()=> {
    if (email.validity.valid) {
        emailError.textContent = ''
        emailError.className = 'emailError'
    } else {
        showMailError()
    }
})

nameInpt.addEventListener('input', ()=> {
    if (nameInpt.validity.valid) {
        nameError.textContent = ""
        nameError.className = 'nameError'
    } else {
        showNameError()
    }
})

form.addEventListener('submit', (event)=> {
    if (!email.validity.valid) {
        showMailError()
        event.preventDefault()
    }
})

form.addEventListener('submit', (event)=> {
    if (!nameInpt.validity.valid) {
        showNameError()
        event.preventDefault()
    }
})

