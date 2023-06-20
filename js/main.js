// WORK BUTTON SETTINGS
const workButton = document.getElementsByClassName('work__button')
for (let i = 0; i < workButton.length; i += 1) {
    workButton[i].addEventListener('click', () => {
        if (workButton[i].id === 'work1') {
            workButton[i].classList.toggle('press')
            workButton[1].classList.remove('press')
            workButton[2].classList.remove('press')
            workButton[3].classList.remove('press')
        } else if (workButton[i].id === 'work2') {
            workButton[i].classList.toggle('press')
            workButton[0].classList.remove('press')
            workButton[2].classList.remove('press')
            workButton[3].classList.remove('press')
        } else if (workButton[i].id === 'work3') {
            workButton[i].classList.toggle('press')
            workButton[0].classList.remove('press')
            workButton[1].classList.remove('press')
            workButton[3].classList.remove('press')
        } else if (workButton[i].id === 'work4') {
            workButton[i].classList.toggle('press')
            workButton[0].classList.remove('press')
            workButton[1].classList.remove('press')
            workButton[2].classList.remove('press')
        } 
    })
}

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