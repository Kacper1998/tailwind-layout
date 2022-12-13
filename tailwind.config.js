module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    }
  }
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

var a = $(".nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.nav').css({"background":"red"});
    } else {
       $('.nav').css({"background":"transparent"});
    }
});