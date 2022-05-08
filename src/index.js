import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
window.addEventListener("scroll",function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 0)
})
window.addEventListener("scroll",function(){
  var links = document.querySelector('Link');
  links.classList.toggle('sticky',window.scrollY > 0)
})

var hamburger = document.querySelector(".hamburger");
var Menudiv = document.querySelector(".menu-div");

hamburger.addEventListener("click",responsive);
function responsive() {
  hamburger.classList.toggle("active");
  Menudiv.classList.toggle("active");
}

const link = document.querySelectorAll(".item");
link.forEach(n => n.addEventListener("click",closeMenu));
function closeMenu(){
  hamburger.classList.remove("active");
  Menudiv.classList.remove("active");
}

const c = document.getElementById("main-carousel");
c.flickity();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
