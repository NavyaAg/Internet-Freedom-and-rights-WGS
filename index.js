document.querySelector(".bg-zoom").style.backgroundImage="url('images/1.jpg')";
var bg = ["'images/2.jpg'", "'images/3.jpg'", "'images/4.jpg'", "'images/1.jpg'"];
var imageHead = document.querySelector(".zoominheader");
var i = 0;


setInterval(function() {
  document.querySelector(".bg-zoom").style.backgroundImage="url("+bg[i]+")";
  i = i + 1;
  
  if (i == bg.length) {
    i = 0;
    
  }
}, 10000);


var navLinks=document.querySelector('.nav-links')
var navItems=document.querySelectorAll('.nav-item')
var hamburger=document.querySelector('.hamburger')
var navbar=document.querySelector('.navbar')

document.querySelector('.hamburger').addEventListener('click', ()=>{
   
    navLinks.classList.toggle('open')
    hamburger.classList.toggle('clicked')
})


window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


