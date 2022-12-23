
const burgerIcon = document.querySelector('.button-icon');
const menu = document.querySelector('.header__nav');
console.log(burgerIcon);
burgerIcon.addEventListener('click', oko);

function oko(e){
   burgerIcon.classList.toggle('activ');
   menu.classList.toggle('onactiv');
   
}

const footerTitle = document.querySelectorAll('.footer-top__title');
 
document.addEventListener('click', down);
function down(e){
   const item = e.target;
  const nextin = item.nextElementSibling;
  nextin.classList.toggle('closed')

}