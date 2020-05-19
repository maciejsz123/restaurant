import React from 'react';
import Header from './partials/header';
import MainCarousel from './components/mainCarousel';
import Description from './components/description';
import Offer from './components/offer';
import Address from './components/address';
import Menu from './components/menu';
import BookTable from './components/bookTable';
import './styles/app.sass';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <MainCarousel />
      <Description />
      <Offer />
      <Menu />
      <Address />
      <Address />
      <BookTable />
    </div>
  );
}

export default App;

window.addEventListener("click", function(clicked) {
  if(clicked.target.className !== 'header-link' && clicked.target.className !== 'spanHeader' && clicked.target.className !== 'imgHeader') {
    return ;
  }
  let element = clicked.target;
  let anchor = '';
  let offsetPixels = 0;

  if(element.classList.contains('header-link')) {
    anchor = document.getElementById(element.href.substring(element.href.indexOf('#.')+2));
    offsetPixels = 95;
  } else if(element.classList.contains('imgHeader') || element.classList.contains('spanHeader')) {
    anchor = document.getElementById(element.parentElement.href.substring(element.parentElement.href.indexOf('#.')+2));
  }
  window.scrollTo(0, anchor.offsetTop - offsetPixels);
});


window.addEventListener('scroll', () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let toAnimate = document.querySelectorAll('.toAnimate');

  Array.from(toAnimate).forEach( item => {
    if(!item.classList.contains('slide-from-bottom') && item.getBoundingClientRect().bottom < windowHeight && windowWidth > 992) {
      item.classList.add('slide-from-bottom');
      item.classList.remove('toAnimate');
    }
  })


});
