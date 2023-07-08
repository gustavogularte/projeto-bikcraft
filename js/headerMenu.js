const btnMobile = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.header-menu');
const navLink = document.querySelector('.header-menu a');

console.log(navLink)

btnMobile.addEventListener('click', () => {
  if (navMenu.classList.contains('ativo')) {
    navMenu.classList.remove('ativo');
  } else {
    navMenu.classList.add('ativo');
  }
})

