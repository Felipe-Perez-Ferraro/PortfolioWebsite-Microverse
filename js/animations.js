const animateFrom = (elem, direction) => {
    direction = direction || 1
    let x = 0
    let y = direction * 100
    if (elem.classList.contains('gs_reveal_fromLeft')) {
        x = -100
        y = 0
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
        x = 100
        y = 0
    }
    elem.style.transform = `translate(${x}px, ${y}px)`
    elem.style.opacity = '0'
    gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
        duration: 1.5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto',
    })
}

const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 })
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.gs_reveal').forEach((elem) => {
        hide(elem) // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            markers: false,
            onEnter() { animateFrom(elem) },
            onEnterBack() { animateFrom(elem, -1) },
            onLeave() { hide(elem) }, // assure that the element is hidden when scrolled into view
        })
    })
})
