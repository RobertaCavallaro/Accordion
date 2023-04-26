// const accordions = Array.from(document.querySelectorAll('.accordion'));

// accordions.forEach(accordion =>  {
//   const accordionHeader = accordion.querySelector('.aHeader');

// accordionHeader.addEventListener('click',e => {
//   accordion.classList.toggle('isOpen');
// })
// })

/* example 2 */

// const accordionContainer = document.querySelector('.aContainer');
// accordionContainer.addEventListener('click', e => {
// const accordionHeader = event.target.closest('.aHeader');

// if (accordionHeader) {
//   const accordion = accordionHeader.parentElement;
// const accordionContent = accordionHeader.nextElementSibling;
// const accordionInner = accordionContent.children[0];
// let height;
// if (accordion.classList.contains('isOpen')) {
//   height=0;
// } else {
//   height =accordionInner.getBoundingClientRect().height;
// }


//   accordion.classList.toggle('isOpen');
//   accordionContent.style.height = height + 'px';
// }

// })

const accordionContainer = document.querySelector('.aContainer');

accordionContainer.addEventListener('click', e => {
const accordionHeader = e.target.closest('.aHeader');

if (accordionHeader) {
  const accordion = accordionHeader.parentElement;
  const accordionContent = accordionHeader.nextElementSibling;
  const accordionInner = accordionContent.children[0]; // 0 is the first child
  let height;

  if (accordion.classList.contains('isOpen')) {
    height=0;
  } else {
    height = accordionInner.getBoundingClientRect().height;
  }

  accordion.classList.toggle('isOpen');
  accordionContent.style.height = height + 'px';
  
}

})

