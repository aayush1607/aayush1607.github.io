let ham= document.querySelector('.ham');

let times= document.querySelector('.times');

let mobileNav=document.querySelector('.mobile-nav');

let home=document.querySelector('.home');

let about=document.querySelector('.aboutme');

let myskills=document.querySelector('.myskills');

let contact=document.querySelector('.contact');

ham.addEventListener('click',function(){

    mobileNav.classList.add('open');



});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});


home.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

about.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
myskills.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
contact.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}