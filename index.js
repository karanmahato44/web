const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
})


const darkbtn = document.querySelector('.dark-btn');
const html = document.querySelector('html');
const main = document.querySelector('main');

darkbtn.addEventListener('click', () => {
  html.classList.toggle('dark')
  main.classList.toggle('dark')
})