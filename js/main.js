const workButton = document.getElementsByClassName('work__button');
const aboutButton = document.querySelector('.about__button');

for (let i = 0; i < workButton.length; i+=1) {
  workButton[i].addEventListener('click', () => {
    if (workButton[i].id === 'work1') {
      workButton[i].classList.toggle('press');
      workButton[1].classList.remove('press');
      workButton[2].classList.remove('press');
    } else if (workButton[i].id === 'work2') {
      workButton[i].classList.toggle('press');
      workButton[0].classList.remove('press');
      workButton[2].classList.remove('press');
    } else if (workButton[i].id === 'work3') {
      workButton[i].classList.toggle('press');
      workButton[0].classList.remove('press');
      workButton[1].classList.remove('press');
    }
  });
}

aboutButton.addEventListener('click', () => {
  aboutButton.classList.toggle('press');
});

window.onscroll = () => scrollFun();

const scrollFun = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.add('scroll');
  } else {
    document.body.classList.remove('scroll');
  }
};
