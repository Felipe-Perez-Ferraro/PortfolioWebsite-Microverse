
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

// WINDOW POPUP SETTINGS
const cards = [
    {
        id: 'work1',
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
    },
    {
        id: 'work2',
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
    },
    {
        id: 'work3',
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
    },
    {
        id: 'work4',
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
    }
]

const printCard = () => {
    const cardContainer = document.querySelector('.work__section')
    cards.forEach( card => {
        const article = document.createElement('article')
        article.classList.add('work__description')
        article.classList.add('gs_reveal')
        article.classList.add('gs_reveal_fromLeft')
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

// WORK BUTTON SETTINGS
const workButton = document.getElementsByClassName('work__button')
const popupWindow = document.getElementById('popupWindow')

for (let i = 0; i < workButton.length; i += 1) {
    workButton[i].addEventListener('click', () => {
        if (workButton[i].id === 'work1') {
            workButton[i].classList.toggle('press')
            workButton[1].classList.remove('press')
            workButton[2].classList.remove('press')
            workButton[3].classList.remove('press')

            const article = document.createElement('article')
            article.classList.add('popup__description')
            article.innerHTML = 
            `
            <header class="popup__header">
                <h2 class="popup__title">Tonic</h2> 
                <i onclick="" class="fa-solid fa-times popup__xmark"></i>
            </header>
            <ul class="popup__features">
                <li class="popup__features__item">Canopy</li>
                <li class="popup__features__item">Back End Dev</li>
                <li class="popup__features__item">2015</li>
            </ul>
            <figure class="popup__image__container multi">
                <img src="./assets/SnapshootPortfolio.png" alt="" class="popup__image"> 
            </figure>
            <div class="popup__features__container">
                <p class="popup__paragraph__mobile">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.
                </p>
                <p class="popup__paragraph__desktop">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <br>
                    <br>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.
                </p>
                <div class="popup__bottom__container">
                    <ul class="popup__list__container ruby">
                        <li class="popup__language__item">html</li>
                        <li class="popup__language__item">css</li>
                        <li class="popup__language__item">javascript</li>
                        <li class="popup__language__item">Ruby</li>
                        <li class="popup__language__item">Bootstrap</li>
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
            
            const workSection = document.querySelector('.work__section')
            workSection.classList.toggle('blurEffect')
            
            const navbarSection = document.querySelector('.navbar__section')
            navbarSection.style.display = 'none'
            
            const closePopup = document.querySelector('.popup__xmark')
            closePopup.addEventListener('click', ()=> {
                const popupDescription = document.querySelector('.popup__description')
                popupDescription.remove()
                workSection.classList.remove('blurEffect')
                navbarSection.style.display = 'flex'
                workButton[i].classList.remove('press')
            })

        } else if (workButton[i].id === 'work2') {
            workButton[i].classList.toggle('press')
            workButton[0].classList.remove('press')
            workButton[2].classList.remove('press')
            workButton[3].classList.remove('press')

            const article = document.createElement('article')
            article.classList.add('popup__description')
            article.innerHTML = 
            `
            <header class="popup__header">
                <h2 class="popup__title">Multi-Post Stories</h2> 
                <i onclick="" class="fa-solid fa-times popup__xmark"></i>
            </header>
            <ul class="popup__features">
                <li class="popup__features__item">FACEBOOK</li>
                <li class="popup__features__item">Full Stack Dev</li>
                <li class="popup__features__item">2015</li>
            </ul>
            <figure class="popup__image__container multi">
                <img src="./assets/SnapshootPortfolio.png" alt="" class="popup__image"> 
            </figure>
            <div class="popup__features__container">
                <p class="popup__paragraph__mobile">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                </p>
                <p class="popup__paragraph__desktop">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <br>
                    <br>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.
                </p>
                <div class="popup__bottom__container">
                    <ul class="popup__list__container ruby">
                        <li class="popup__language__item">html</li>
                        <li class="popup__language__item">css</li>
                        <li class="popup__language__item">javascript</li>
                        <li class="popup__language__item">Ruby</li>
                        <li class="popup__language__item">Bootstrap</li>
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
            
            const workSection = document.querySelector('.work__section')
            workSection.classList.toggle('blurEffect')
            
            const navbarSection = document.querySelector('.navbar__section')
            navbarSection.style.display = 'none'
            
            const closePopup = document.querySelector('.popup__xmark')
            closePopup.addEventListener('click', ()=> {
                const popupDescription = document.querySelector('.popup__description')
                popupDescription.remove()
                workSection.classList.remove('blurEffect')
                navbarSection.style.display = 'flex'
                workButton[i].classList.remove('press')
            })
        } else if (workButton[i].id === 'work3') {
            workButton[i].classList.toggle('press')
            workButton[0].classList.remove('press')
            workButton[1].classList.remove('press')
            workButton[3].classList.remove('press')

            
            const article = document.createElement('article')
            article.classList.add('popup__description')
            article.innerHTML = 
            `
            <header class="popup__header">
                <h2 class="popup__title">Facebook 360</h2> 
                <i onclick="" class="fa-solid fa-times popup__xmark"></i>
            </header>
            <ul class="popup__features">
                <li class="popup__features__item">FACEBOOK</li>
                <li class="popup__features__item">Full Stack Dev</li>
                <li class="popup__features__item">2015</li>
            </ul>
            <figure class="popup__image__container multi">
                <img src="./assets/SnapshootPortfolio.png" alt="" class="popup__image"> 
            </figure>
            <div class="popup__features__container">
                <p class="popup__paragraph__mobile">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                </p>
                <p class="popup__paragraph__desktop">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <br>
                    <br>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.
                </p>
                <div class="popup__bottom__container">
                    <ul class="popup__list__container ruby">
                        <li class="popup__language__item">html</li>
                        <li class="popup__language__item">css</li>
                        <li class="popup__language__item">javascript</li>
                        <li class="popup__language__item">Ruby</li>
                        <li class="popup__language__item">Bootstrap</li>
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
            
            const workSection = document.querySelector('.work__section')
            workSection.classList.toggle('blurEffect')
            
            const navbarSection = document.querySelector('.navbar__section')
            navbarSection.style.display = 'none'
            
            const closePopup = document.querySelector('.popup__xmark')
            closePopup.addEventListener('click', ()=> {
                const popupDescription = document.querySelector('.popup__description')
                popupDescription.remove()
                workSection.classList.remove('blurEffect')
                navbarSection.style.display = 'flex'
                workButton[i].classList.remove('press')
            })
        } else if (workButton[i].id === 'work4') {
            workButton[i].classList.toggle('press')
            workButton[0].classList.remove('press')
            workButton[1].classList.remove('press')
            workButton[2].classList.remove('press')

            
            const article = document.createElement('article')
            article.classList.add('popup__description')
            article.innerHTML = 
            `
            <header class="popup__header">
                <h2 class="popup__title">Uber Navigation</h2> 
                <i onclick="" class="fa-solid fa-times popup__xmark"></i>
            </header>
            <ul class="popup__features">
                <li class="popup__features__item">Uber</li>
                <li class="popup__features__item">Lead Developer</li>
                <li class="popup__features__item">2018</li>
            </ul>
            <figure class="popup__image__container multi">
                <img src="./assets/SnapshootPortfolio.png" alt="" class="popup__image"> 
            </figure>
            <div class="popup__features__container">
                <p class="popup__paragraph__mobile">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                </p>
                <p class="popup__paragraph__desktop">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <br>
                    <br>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.
                </p>
                <div class="popup__bottom__container">
                    <ul class="popup__list__container ruby">
                        <li class="popup__language__item">html</li>
                        <li class="popup__language__item">css</li>
                        <li class="popup__language__item">javascript</li>
                        <li class="popup__language__item">Ruby</li>
                        <li class="popup__language__item">Bootstrap</li>
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
            
            const workSection = document.querySelector('.work__section')
            workSection.classList.toggle('blurEffect')
            
            const navbarSection = document.querySelector('.navbar__section')
            navbarSection.style.display = 'none'
            
            const closePopup = document.querySelector('.popup__xmark')
            closePopup.addEventListener('click', ()=> {
                const popupDescription = document.querySelector('.popup__description')
                popupDescription.remove()
                workSection.classList.remove('blurEffect')
                navbarSection.style.display = 'flex'
                workButton[i].classList.remove('press')
            })
        } 
    })
}
