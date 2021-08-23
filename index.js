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


const navLinks=document.querySelector('.nav-links')
const navItems=document.querySelectorAll('.nav-item')
const hamburger=document.querySelector('.hamburger')
const navbar=document.querySelector('.navbar')

document.querySelector('.hamburger').addEventListener('click', ()=>{
    console.log("clicked")
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

alert("sleep");
