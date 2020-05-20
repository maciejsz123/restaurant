import React from 'react';
import Header from './partials/header/header';
import MainCarousel from './components/mainCarousel/mainCarousel';
import Description from './components/description/description';
import Offer from './components/offer/offer';
import Address from './components/address/address';
import Menu from './components/menu/menu';
import BookTable from './components/bookTable/bookTable';
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
  if(clicked.target.className !== 'header-link' && clicked.target.className !== 'span-header' && clicked.target.className !== 'img-header') {
    return ;
  }
  let element = clicked.target;
  let anchor = '';
  let offsetPixels = 0;

  if(element.classList.contains('header-link')) {
    anchor = document.getElementById(element.href.substring(element.href.indexOf('#.')+2));
    offsetPixels = 95;
  } else if(element.classList.contains('img-header') || element.classList.contains('span-header')) {
    anchor = document.getElementById(element.parentElement.href.substring(element.parentElement.href.indexOf('#.')+2));
  }
  window.scrollTo(0, anchor.offsetTop - offsetPixels);
});


window.addEventListener('scroll', () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let toAnimate = document.querySelectorAll('.to-animate');

  Array.from(toAnimate).forEach( item => {
    if(!item.classList.contains('slide-from-bottom') && item.getBoundingClientRect().bottom < windowHeight && windowWidth > 992) {
      item.classList.add('slide-from-bottom');
      item.classList.remove('to-animate');
    }
  })


});
